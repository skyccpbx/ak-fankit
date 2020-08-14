<template>
  <footer>
    <div id="footer" class="footer">
      <div class="footer-claim">
        <p class="f-logo">
          <img src="https://rescdn.imtxwy.com/ak/images/foot-logo.png" />
        </p>
        <p class="footer-claim-text">
          <span>
            因遊戲內容涉及「性」-遊戲角色穿著凸顯性特徵之服飾或裝扮但不涉及性暗示，故建議應列級別至少為「輔導十二歲級」。
            <br />警語：注意使用時間，避免沉迷於遊戲遊戲部分內容或服務需另行支付其他費用
          </span>
          <img src="https://rescdn.imtxwy.com/wl/images/15+.png" />
        </p>
      </div>
      <div class="footer-copyright">
        <span>© 龍成網路有限公司</span>
        <span class="links">
          <a href="http://i.txwy.tw/clause">服務條款</a>
          &nbsp;|&nbsp;
          <a href="http://i.txwy.tw/secret">保密規則</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer {
  background-color: #141516;
  text-align: center;
  position: relative;
  color: #999;
  border-top: 1px solid #535353;
}
.f-logo img {
  width: 60%;
  max-width: 500px;
}
.footer-claim {
  font-size: 80%;
  color: #898989;
  margin: 0 auto;
  position: relative;
  padding: 1em 0 3em;
}
.footer-claim-text {
  margin: 0 0 0.65rem 0;
}
.footer-claim-text span {
  display: inline-block;
}
.footer-copyright {
  position: absolute;
  font-size: 80%;
  bottom: 1em;
  width: 100%;
}
.footer-copyright span {
  padding: 0 0.5em;
}
.footer a {
  background-color: transparent;
  color: #999;
  text-decoration: none;
}
.footer-claim-text img {
  max-width: 2.1875rem;
  vertical-align: inherit;
}
@media (max-width: 1024px) {
  .footer-claim {
    font-size: 12px;
    color: #898989;
    margin: 0 auto;
    position: relative;
    padding: 1em 0 2em;
  }
  .footer-claim-text span {
    display: inline-block;
    padding: 2%;
  }
  .f-logo img {
    width: 84%;
    max-width: 500px;
  }
  .f-logo {
    margin: 0 0 1.3% 0;
  }
}
</style>
