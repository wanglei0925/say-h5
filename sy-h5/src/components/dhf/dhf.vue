<template>
  <div class="set-wrapepr">
    <!-- <div>
            验证 this.$set
        </div>
        <ul class="aaaa">
            <li v-for="(item,index) in setList" :key="index" @touchend.stop="change(index)">
                <span>{{index}}</span>
                <span>{{item.name}}</span>
                <span>{{item.dec}}</span>
                <span>{{item.test}}</span>
            </li>
        </ul>
        <div class="btn" @touchend.stop="add()"> 增加一条数据</div>
        <ul>
            <li v-for="(item,index) in setList222" :key="index">
                <food :food="item"></food>
            </li>
        </ul> -->
    <template v-if="false">
      <div>见证我们持续运行的时间</div>
      <div class="time-wrapper-ceil">
        <span>天</span>
        <span>时</span>
        <span>分</span>
        <span>秒</span>
      </div>
      <div class="time-wrapper">
        <span>{{day_val}}</span>
        <span>{{hour_val}}</span>
        <span>{{minute_val}}</span>
        <span>{{second_val}}</span>
      </div>

      <div v-if="show_flag">
        倒计时
      </div>

      <div class="time-wrapper" v-if="show_flag">
        <span>{{card_day_val}}</span>
        <span>{{card_hour_val}}</span>
        <span>{{card_minute_val}}</span>
        <span>{{card_second_val}}</span>
      </div>
    </template>

    <div class="time-graph">
      <canvas id="time-graph-canvas" width="160" height="160"></canvas>
    </div>
    <div class="time-graph">
      <canvas id="weather-graph-canvas" width="160" height="160"></canvas>
    </div>
  </div>
</template>
<script>
import Food from "./food.vue";
export default {
  data() {
    return {
      setList: [
        {
          name: "vue",
          dec: "喜欢"
        },
        {
          name: "angular",
          dec: "不喜欢"
        },
        {
          name: "react",
          dec: "学习中"
        }
      ],
      setList222: [
        {
          name: "vue",
          dec: "喜欢"
        },
        {
          name: "angular",
          dec: "不喜欢"
        },
        {
          name: "react",
          dec: "学习中"
        }
      ],
      timer_item1: 0,
      time_start: 0,
      diff: 0,
      day_val: 0,
      hour_val: 0,
      minute_val: 0,
      second_val: 0,
      // 抢购倒计时的数据
      show_flag: false,
      timer_item2: 0,
      card_start: 0,
      card_end: 0,
      card_day_val: 0,
      card_hour_val: 0,
      card_minute_val: 0,
      card_second_val: 0
    };
  },
  mounted() {},
  created() {
    this.getTime();
    this.cardTime();

    this.$nextTick(function() {
      var time_canvas = document.getElementById("time-graph-canvas");
      this.drawMain(time_canvas, 70, "#85d824", "#eef7e4");

      var weather_canvas = document.getElementById("weather-graph-canvas");
      this.drawMain(weather_canvas, 90, "#2ba0fb", "#e5f1fa");
    });
  },
  computed: {},
  methods: {
    drawMain(drawing_elem, percent, forecolor, bgcolor) {
      /*
                @drawing_elem: 绘制对象
                @percent：绘制圆环百分比, 范围[0, 100]
                @forecolor: 绘制圆环的前景色，颜色代码
                @bgcolor: 绘制圆环的背景色，颜色代码
            */
      var context = drawing_elem.getContext("2d");
      var center_x = drawing_elem.width / 2;
      var center_y = drawing_elem.height / 2;
      var rad = Math.PI * 2 / 100;
      var speed = 0;

      // 绘制背景圆圈
      function backgroundCircle() {
        context.save();
        context.beginPath();
        context.lineWidth = 8; //设置线宽
        var radius = center_x - context.lineWidth;
        context.lineCap = "round";
        context.strokeStyle = bgcolor;
        context.arc(center_x, center_y, radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
        context.restore();
      }

      //绘制运动圆环
      function foregroundCircle(n) {
        context.save();
        context.strokeStyle = forecolor;
        context.lineWidth = 8;
        context.lineCap = "round";
        var radius = center_x - context.lineWidth;
        context.beginPath();
        context.arc(
          center_x,
          center_y,
          radius,
          -Math.PI / 2,
          -Math.PI / 2 + n * rad,
          false
        ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke();
        context.closePath();
        context.restore();
      }

      //绘制文字
      function text(n) {
        context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
        context.fillStyle = forecolor;
        var font_size = 40;
        context.font = font_size + "px Helvetica";
        var text_width = context.measureText(n.toFixed(0) + "%").width;
        context.fillText(
          n.toFixed(0) + "%",
          center_x - text_width / 2,
          center_y + font_size / 2
        );
        context.restore();
      }

      //执行动画
      (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
        backgroundCircle();
        text(speed);
        foregroundCircle(speed);
        if (speed >= percent) return;
        speed += 1;
      })();
    },

    change(index) {
      //   this.setList[index].test = "测试测试";
      // Vue.set()在methods里面可以写成 this.$set()
      this.$set(this.setList[index], "test", "测试测试");
      console.log(this.setList);
    },
    add() {
      this.setList.push({
        name: "html",
        dec: "呀 这是基础呀"
      });
      console.log(this.setList);
    },
    getTime() {
      this.time_start = new Date("2018/01/05").getTime(); //获取创建日期的毫秒数
      this.timer_item1 = setInterval(() => {
        var this_now = new Date().getTime();
        this.diff = (this_now - this.time_start) / 1000; //获取两者相差的秒数
        this.day_val = Math.floor(this.diff / 3600 / 24);
        this.hour_val = Math.floor((this.diff / 3600) % 24);
        this.minute_val = Math.floor((this.diff % 3600) / 60);
        this.second_val = Math.floor((this.diff % 3600) % 60);
      }, 1000);
    },
    // 抢购倒计时的方法
    cardTime() {
      this.card_start = new Date("2018/7/16 00:00").getTime();
      this.card_end = new Date("2018/7/16 16:30").getTime();
      if (
        this.card_start < new Date().getTime() &&
        new Date().getTime() < this.card_end
      ) {
        this.show_flag = true;
        this.timer_item2 = setInterval(() => {
          this.card_diff = (this.card_end - new Date().getTime()) / 1000;
          this.card_day_val = Math.floor(this.card_diff / 3600 / 24);
          this.card_hour_val = Math.floor((this.card_diff / 3600) % 24);
          this.card_minute_val = Math.floor((this.card_diff % 3600) / 60);
          this.card_second_val = Math.floor((this.card_diff % 3600) % 60);
        }, 1000);
      } else {
        this.show_flag = false;
        clearInterval(this.timer_item2);
      }
    }
  },
  watch: {
    setList222() {
      console.log(this.setList222);
    }
  },
  destroyed() {
    clearInterval(this.timer_item1);
    clearInterval(this.timer_item2);
  },
  components: {
    Food
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.set-wrapepr {
  font-size: 32 / @rem;
  text-align: center;
  .time-wrapper-ceil {
    display: flex;
    justify-content: space-around;
    span {
      width: 80 / @rem;
      height: 80 / @rem;
      line-height: 80 / @rem;
    }
  }
  .time-wrapper {
    display: flex;
    justify-content: space-around;
    span {
      width: 80 / @rem;
      height: 80 / @rem;
      border: 1px solid #ddd;
      line-height: 80 / @rem;
    }
  }
  .aaaa {
    margin-top: 60 / @rem;
    line-height: 60 / @rem;
    li {
      width: 100%;
      font-size: 0;
      span {
        display: inline-block;
        font-size: 28 / @rem;
        width: 25%;
        text-align: center;
      }
    }
  }
  .btn {
    width: 90%;
    color: #fff;
    line-height: 88 / @rem;
    text-align: center;
    background: #e30920;
    border-radius: 10 / @rem;
    margin: 20 / @rem auto;
  }
}

.time-graph {
  padding-top: 20px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

#time-graph-canvas {
  width: 80px;
  height: 80px;
}
</style>

