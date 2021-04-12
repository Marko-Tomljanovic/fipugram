<template>
<div class="row">
<div class="offset-md-2 col-7">

<form @submit.prevent="postNewImage" class="form-inline mb-5">
 <div class="form-group">


 <croppa :width='400' ::height='400' v-model="imageReference" placeholder='Ucitaj sliku'></croppa><br>
 
 </div>
 <div class="form-group">
 <label for="imageDescription">Description</label>
 <input
 v-model="newImageDescription"
type="text"
class="form-control ml-2"
placeholder="Enter the image description"
id="imageDescription"
 />
 </div>
 <button type="submit" class="btn btn-primary ml-2">Post
image</button>
 </form>

<instagram-card v-for="card in filteredCards" :key="card.id" :info="card"/>    

</div>
<div class="col-2">
  Sidebar {{ store.searchTearm }}
</div>
</div>
</template>



<script>
import InstagramCard from '@/components/InstagramCard.vue'
import store from "@/store"
import { db } from '@/firebase.js'
 
// let cards= []
// cards = [
//   {url: 'https://picsum.photos/id/1/500/500', description: "setup", time: "few minutes ago"},
//   {url: 'https://picsum.photos/id/3/500/500', description: "iphone", time: "5 minutes ago"},
//   {url: 'https://picsum.photos/id/8/500/500', description: "laptop", time: "8 minutes ago"},
//   {url: 'https://picsum.photos/id/10/500/500', description: "šuma", time: "10 minutes ago"}
//   ]

export default {
  name: 'home',
  data: function(){
    return{
      cards: [],
      store,
      newImageDescription:'',
      newImageUrl:'',
      imageReference:null,

    }
  },
  mounted(){
    console.log('MOUNTED ');
    this.getPost();
    //dohvat iz Firebase-a
  },
  methods:{
    getPost(){
      console.log('firebase dohvat');

      db.collection('posts')
      .orderBy('posted_at', 'desc')
      .limit(10)
      .get()
      .then((query) => {
        query.forEach((doc) => {

          const data = doc.data();

          this.cards.push({
            id: doc.id,
            time: data.posted_at,
            description: data.desc,
            url: data.url,
          });
        });
      });
    },
    postNewImage(){
      this.imageReference.generateBlob(blobData => {
        console.log(blobData);
      });
return;

      const imageDescription = this.newImageDescription;

      db.collection('posts')
      .add({
        url: imageUrl,
        desc: imageDescription,
        email: store.currentUser,
        posted_at: Date.now(),
        })
        .then((doc) => {
          this.cards =[];
          console.log('Spremljeno', doc);
          this.newImageUrl = '';
          this.newImageDescription='';

          this.getPost();
        })
        .catch((e) => {
          console.error(e);
        });
    }
  },
  computed: {
    filteredCards(){
      //let termin = this.store.searchTearm;
      
      return this.cards.filter((card) => card.description.includes(this.store.searchTearm));

      //logika koja filtrira cards
      // let termin = this.store.searchTearm
      // let newsCard = []
      // for(let card of this.cards){
      //   if (card.description.indexOf(termin) >= 0) {
      //     newsCard.push(card)
      //   }
      // }
      // return newsCard;
    }
  },
  components: {
    InstagramCard
  },
}
</script>