<template>
        <div class="index-header" v-bind:style="{background: headerbg}">
        <div class="nameleft" v-bind:style="{color: namecolor}" >AbnormalTeam</div>
        <div class="navright">
            <ul>
                 <li v-for="(item, index) in navlists" v-bind:style="{color: licolor}"  :key="index">{{item.title}}</li>
            </ul>
        </div>
        
    </div>
</template>
 
<script>
export default {
    name: 'header-nav',
    data(){
        return{
            navlists: [
                {title: '首页'},
                {title: '博客'},
                {title: '论坛'},
                {title: 'Products'},
                {title: '群友'},
                {title: '关于'},
                {title: 'React版'}
            ],
            headerbg: 'transparent',
            licolor:'hsla(0,0%,100%,.65)',
            namecolor:''
        }
    },
    mounted() {
        window.addEventListener('scroll', this.changeHeaderBg)
    },
    methods:{
        changeHeaderBg (){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
           
           var offsetTop = document.getElementById('changebg').offsetTop
             if(scrollTop > offsetTop){
                 this.headerbg = 'white'
                 this.licolor = 'black'
                 this.namecolor = 'black'
             } else {
                 this.headerbg = 'transparent'
                 this.licolor = 'hsla(0,0%,100%,.65)'
                 this.namecolor = 'white'
             }
        }
    }
}
</script>
<style lang="scss">
.index-header{
   overflow: hidden;
   position: fixed;
   z-index: 9;
   width: 100%;
   top:0;
   .nameleft{
       width:50%;
       float: left;
       margin-top:8px;
       font-size: 28px;
       font-weight: 400;
       color: white;
   }
   .navright{
       width:50%;
        float: right;
        ul{
            display: flex;
            list-style-type: none;
            li{
            margin-right:40px; 
            
            }
            li:hover{
                cursor: pointer;
                color: #f2b535!important
            }
        }
   }
    
}

</style>

