<template>
  <div id="foot">
    <div class='foots'>
      <!-- <div class="zhanwei"></div> -->
      <div class="content">
        <div class="center">
            <p class="firstp"><span>web交流群号:  639503060</span>
            <span>开发团队：AbnormalTeam</span>
            <span>技术栈：Vue, React, Node</span></p>
            <p><span>备案号：豫ICP备05018147号</span>
            <span>豫公网安备0202002542号</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
    };
  }
};
</script>

<style lang="scss">
  #foot {
  
    .foots {
      // .zhanwei {
      //   height:200px;
      // }
      .content {
          // position: fixed;
          // left: 0;
          // bottom: 0;
          height:186px;
          width: 100%;
          // z-index: 99;
          background:#26282c;
          .center {
            width: 80%;
            margin: 0 auto;
            p {
              margin-left: 10%;
              color: hsla(0,0%,100%,.7);
              span {
                margin-right: 2%;
              }
            }
            .firstp {
              padding-top: 66px;
              margin-bottom: 12px;
            }
          }
      }
    }
    
  }
</style>
