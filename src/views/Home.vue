<template>
<div class="row">
<div class="offset-md-2 col-7">

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
      store
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