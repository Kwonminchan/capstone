<template>



  <div>
    <div id = "handicap">
      유형을 선택해주세요
      <br>
      지체  
      <input type="checkbox" id = "checkbox" v-model="checked">
      <label for = "checkbox">{{checked}}</label>
       청각
       <input type="checkbox" id = "checkbox" v-model="checked">
       <label for = "checkbox">{{checked}}</label>
      시각
       <input type="checkbox" id = "checkbox" v-model="checked">
       <label for = "checkbox">{{checked}}</label>
      뇌병변
       <input type="checkbox" id = "checkbox" v-model="checked">
       <label for = "checkbox">{{checked}}</label>
        <br>
         <br>
          <br>
           <br>


    </div>
   

    <div id ="thema">
      관광지를 선택해주세요<br>
      자연<input type="checkbox" id = "checkbox" v-model="checked">
      <label for = "checkbox">{{checked}}</label>
        인문<input type="checkbox" id = "checkbox" v-model="checked">
      <label for = "checkbox">{{checked}}</label>
        쇼핑<input type="checkbox" id = "checkbox" v-model="checked">
      <label for = "checkbox">{{checked}}</label>
        축제/공연/행사<input type="checkbox" id = "checkbox" v-model="checked">
      <label for = "checkbox">{{checked}}</label>
    </div>
    <br>
    <br>
    <br>


    <div id = "location">
      어떤 지역을 원하시나요?
      <br>
      서울 <input type="checkbox" id = "checkbox" v-model="checked">
      <label for = "checkbox">{{checked}}</label>
        경기<input type="checkbox" id = "checkbox" v-model="checked">
    </div>
     <br>
     <br>
     <br>
  
 
    <button type="submit">제출</button>
  

  </div>


 
</template>



<script>


export default {
  name: 'App',
  data(){
    return{
      //변수여기에 전부
      input1 : 60,
      products : ['광화문', '창경궁'],
    }
  },

  methods:{
    increase(){

    }
  },

  components: {
  
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
