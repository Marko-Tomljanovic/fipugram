<template>
<div class="row">
<div class="offset-md-2 col-7">

<form @submit.prevent="postNewImage" class="form-inline mb-5">
 <div class="form-group">
 <label for="imageUrl">Image URL</label>
 <input
 v-model="newImageUrl"
type="text"
class="form-control ml-2"
placeholder="Enter the image URL"
id="imageUrl"
 />
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

<instagram-card v-for="card in filteredCards" :key="card.url" :info="card"/>    

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
 
let cards= []
cards = [
  {url: 'https://picsum.photos/id/1/500/500', description: "setup", time: "few minutes ago"},
  {url: 'https://picsum.photos/id/3/500/500', description: "iphone", time: "5 minutes ago"},
  {url: 'https://picsum.photos/id/8/500/500', description: "laptop", time: "8 minutes ago"},
  {url: 'https://picsum.photos/id/10/500/500', description: "šuma", time: "10 minutes ago"}
  ]
export default {
  name: 'home',
  data: function(){
    return{
      cards,
      store,
      newImageDescription:'',
      newImageUrl:'',

    }
  },
  methods:{
    postNewImage(){
      const imageUrl = this.newImageUrl;
      const imageDescription = this.newImageDescription;

      db.collection('posts')
      .add({
        url: imageUrl,
        desc: imageDescription,
        email: store.currentUser,
        posted_at: Date.now(),
        })
        .then((doc) => {
          console.log('Spremljeno', doc);
          this.newImageUrl = '';
          this.newImageDescription='';
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