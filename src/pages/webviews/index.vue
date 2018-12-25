<template>
    <div>
        <!-- --------headernav------ -->
        <header-nav></header-nav>
        <!--banner-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide1">Slide 1</div>
                <div class="swiper-slide slide2">Slide 2</div>
                <div class="swiper-slide slide3">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>  
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <!--body-->
        <div class="self-products" id="changebg">
            <h2>开源项目 / 源码透析</h2>
            <div class="blocks">
                <div class="block" v-for="(item, index) in products" :key="index"  v-bind:style="{ background: item.bgcolor}">
                    <div class="block-content">
                        {{item.content}}
                    </div>
                </div>
            </div>
            <div class="btn">More Products</div>
        </div>

         <div class="self-templet">
            <h2>Template / 可视化案例</h2>
            <p>Dd3, Echarts, Svg，Canvas</p>
            <div class="blocks">
                <div class="block" v-for="(item, index) in templets" :key="index"  v-bind:style="{ background: item.bgcolor}">
                    <div class="block-content">
                        {{item.content}}
                    </div>
                </div>
            </div>
            <div class="btn">More Templets</div>
        </div>
        <!--博客-->
        <div class="self-blogs" style="overflow:hidden">
            <h2>博客 / 社区论坛</h2>
            <div class="bloginfo">
                <div class="row" style="text-align:left">博客列表</div>
                <div class="row" v-for="(item, index) in blogs" :key="index">
                    <a class="blog-info">
                        <h4>{{item.title}}</h4>
                        <span>{{item.author}}</span>
                    </a>
                    
                </div>
            </div>
            <div class="blog-categorys">
                    <div class="row" style="text-align:left">博客分类</div>
                    <div class="blog-category">
                         <a class="category" v-for="(category, index) in categorys" v-bind:style="{color:colors[index]}" :key="index">{{category}}</a>
                    </div>
            </div>
        </div>

          <div class="self-persons">
            <h2>Coders / 代码狗</h2>
            <div class="blocks">
                <div class="block" v-for="(item, index) in persons" :key="index"  v-bind:style="{ background: item.bgcolor}">
                    <div class="avatarimg"></div>
                    <div class="block-content">
                        {{item.content}}
                    </div>
                </div>
            </div>
            <div class="btn">More persons</div>
        </div>

    <foot></foot>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    data(){
        return{
            products:[
                {bgcolor: '#70c3ff',content: 'content'},
                {bgcolor: '#fd6a7f',content: 'content'},
                {bgcolor: '#7f8ea0',content: 'content'},
                {bgcolor: '#89d04f',content: 'content'}
            ],
            templets:[
                {bgcolor: '#70c3ff',content: 'content'},
                {bgcolor: '#fd6a7f',content: 'content'},
                {bgcolor: '#7f8ea0',content: 'content'},
                {bgcolor: '#89d04f',content: 'content'}
            ],
            persons:[
                {bgcolor: '#70c3ff',content: 'content'},
                {bgcolor: '#fd6a7f',content: 'content'},
                {bgcolor: '#7f8ea0',content: 'content'},
                {bgcolor: '#89d04f',content: 'content'}
            ],
            blogs: [
                {title: '论如何进行小程序自定义组件的单元测试', author: 'bobo'},
                {title: '论如何进行小程序自定义组件的单元测试', author: 'bobo'},
                {title: '论如何进行小程序自定义组件的单元测试', author: 'bobo'},
                {title: '论如何进行小程序自定义组件的单元测试', author: 'bobo'},
                {title: '论如何进行小程序自定义组件的单元测试', author: 'bobo'},
            ],
            categorys:['Redux','Koa2','Vue3','分布式','Mysql','Hadoop'],
            colors: ['rgb(100, 196, 235)', 'rgb(205, 148, 223)', 'rgb(236, 102, 61)', '#7f8ea0','#89d04f']
        }
    },
    mounted() {
      
  new Swiper ('.swiper-container', {
    loop: true,
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination'
    },
    // 如果需要前进后退按钮
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
        })
    }
}
</script>

<style lang="scss">
    .swiper-container{
        height: 400px;;
        color: white;
        .swiper-slide{
            line-height: 400px;
        }
        .slide1{
            background: rgb(236, 102, 61)
        }
        .slide2{
            background: rgb(100, 196, 235)
        }
        .slide3{
            background: rgb(205, 148, 223)
        }
    }
    .self-products , .self-templet, .self-persons{
        width: 86%;
        margin: 0 auto;
        margin-top:60px;
        margin-bottom: 30px;
        .blocks{
            display: flex;
            .block{
                height: 200px;
                width: 21%;
                margin-right: 4%;
                border-radius: 6px;
                line-height: 200px;
                color:white;
                font-size: 24px
            }
        }
        
        .btn{
            background: #e1e1e1;
            color: #616161;
            cursor: pointer;
            width:120px;
            margin: 0 auto;
            padding: 6px;
            margin-top:40px;
            border-radius: 4px;
        }
        .block:hover{
            position: relative;
            top:-6px;
            box-shadow: 0 26px 40px -24px rgba(0,36,100,.5)
        }
    }
    .self-blogs{
        width:84%;
        margin: 0 auto;
        .bloginfo{
         float: left;
         width: 50%;
         height: 300px;
         border: 1px solid #efefef;
         box-shadow: 1px 1px 1px rgb(223, 238, 224);
         .row{
            padding: 12px;
            border-bottom: 1px solid #efefef;
            .blog-info{
                display: flex;
                h4{
                    margin:0;
                    font-weight: 300;
                    margin-right:40px
                }
            
            }
         }
              
        }
        .blog-categorys{
              float: left;
              width: 40%;
              height: 300px;
              box-shadow: 1px 1px 1px rgb(223, 238, 224);
              border: 1px solid #efefef;
              margin-left: 5%;
              .row{
                 padding: 12px;
                 border-bottom: 1px solid #efefef;
              }
             .blog-category{
                
                display: flex;
                flex-wrap: wrap;   
                padding: 40px;
                    .category{
                        padding: 6px;
                        border: 1px solid #e1e1e1;
                        margin: 8px;
                        width:24%;
                        display: inline-block;
                    }    
          }
        }
      
    }
     .self-persons{
           .avatarimg{
               width:80px;
               height: 80px;
               border-radius: 40px;
               border: 1px solid white;
               margin: 0 auto;
               position: relative;
               top:20px;
           }
           .block-content {
               height: 60% 
           }
       }
   
@media screen and (max-width: 768px) {
    
    .blocks{
        display: block!important;
        .block{
            width: 96%!important;
            margin: 0 auto;
            margin-top:20px;
        }
    }
    .bloginfo,.blog-categorys{
        width: 98%!important;
            margin: 0 auto!important;
            margin-top:20px!important;
            height: auto!important;

    }
}
</style>
