<template>
    <div class="user-about">
        <div class="user-contact">
            <div class="user-a-logo"><img src="/static/img/alogo@2x.png" alt=""></div>
            <div class="user-a-intro">
                <p>中财微银是为有资金需求和投资需求的用户，搭建了一个 公平、 透明、 稳定、 高效的网络金融平台，是安全互联网金融的倡导者，专业提供互联网金融信息发布及网络借贷撮合交易服务。用户可以在中财微银上获得信用评级、发布借款请求满足资金需要；也可以把自己的闲余资金通过中财微银出借给信用良好有资金需求的用户，在获得良好的 资金回报率的同时帮助他人。</p>
                <p>中财微银凭借成熟、严谨的风险控制评估机制，以及专业的团队和贴心的服务，为公众提供低风险、高回报、多样化的投资产品，实现“轻松借贷，投资无忧”。</p>
                <p>中财微银由深圳市天朝金融信息服务有限公司全资控股，由国内金融服务机构精英人才，法律、电子商务、 经济研究等各行业的翘楚，以及成功运营多个获利项目的资深运营团队组成。拥有一流的审核、风控团队和完善的风险管控体系，从制度、流程、系统等方面全面保护投资者的利益。</p>
                <p>中财微银在河北，江苏，山东，辽宁，天津，湖南等省市均设有分公司，本着线下服务于线上的发展原则，利用先进的互联网技术，着力打造中国最安全、风险最低的P2P金融中介服务平台。</p>
                <div class="img-about">
                    <div>
                        <img src="/static/img/company-img1.png" alt="">
                    </div>
                    <div>
                        <img src="/static/img/company-img2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="index-line"></div>
            <div class="user-a-list">
                <ul>
                    <li>
                        <span>平台QQ</span>3467057901</li>
                    <li>
                        <span>微信账号</span>zhongcaiweiyin</li>
                    <li>
                        <span>公司地址</span>北京市朝阳区通用国际中心</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.user-about {
  font-size: 28 / @rem;
  padding: 30 / @rem;
  line-height: 40 / @rem;
  .user-a-logo {
    img {
      display: block;
      margin: 0 auto;
      width: 226 / @rem;
      height: 170 / @rem;
      margin-bottom: 40 / @rem;
    }
  }
  .user-a-intro {
    p {
      font-size: 28 / @rem;
      color: #666;
      text-indent: 60 / @rem;
    }
    .img-about {
      margin: 30 / @rem 0;
      display: flex;
      justify-content: space-around;
      div {
        flex: 0 0 50%;
        img {
          width: 100%;
          height: auto;
        }
        padding: 0 10 / @rem;
      }
    }
  }
  .user-a-list {
    color: #666;
    li {
      height: 80 / @rem;
      border-bottom: 1px solid #ddd;
    }
    li span {
      line-height: 80 / @rem;
      color: #999;
      margin-right: 20 / @rem;
    }
  }
}
</style>
