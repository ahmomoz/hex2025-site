<script setup></script>

<template>
  <header class="home-hero-section">
    <div class="container-fluid">
      <div class="row">
        <div class="left-hero-wrap col-lg-6 bg"></div>
        <div class="right-hero-wrap col-lg-6 bg">
          <div class="right-text-content ps-lg-13">
            <h1 class="text-primary fw-bolder">Alyse Wang</h1>
            <h3 class="text-primary mt-3">前端工程師 & 職涯諮詢師</h3>
          </div>
        </div>
      </div>
      <div class="row instruction-wrap">
        <div class="col-lg-10 col-xxl-7">
          <div class="instruction-text-content">
            <p class="fs-4 fs-lg-3 fw-medium d-lg-flex">
              <span class="d-block">嗨，我是 Alyse</span>
              <span class="d-block ms-lg-3">一名深耕前端技術的工程師。</span>
            </p>
            <p class="fs-4 fs-lg-3 fw-medium mt-4">
              擅長 React、Vue
              等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
            </p>
            <ul class="link-wrap f-align-center">
              <li>
                <a href="#" class="icon-hover">
                  <img
                    src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-YouTube.svg"
                    alt="icon-YouTube"
                  />
                </a>
              </li>
              <li>
                <a href="#" class="icon-hover">
                  <img
                    src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-ApplePodcasts.svg"
                    alt="icon-ApplePodcasts"
                  />
                </a>
              </li>
              <li>
                <a href="#" class="icon-hover">
                  <img
                    src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-Facebook.svg"
                    alt="icon-Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#" class="icon-hover">
                  <img
                    src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-Linkedin.svg"
                    alt="icon-Linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="#" class="icon-hover">
                  <img
                    src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-Instagram.svg"
                    alt="icon-Instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
h1 {
  @include pad {
    font-size: 52px;
  }
}

.left-hero-wrap {
  background-image: url(/assets/images/backgrounds/bg-1.jpg);
  padding: 300px 0;

  @include pad {
    padding: 175px 0;
  }
}

.right-hero-wrap {
  background-image: url(/assets/images/backgrounds/bg-2.jpg);
  padding: 300px 0;

  @include lg-pc {
    padding: 24px 0 200px;
  }
}

.right-text-content {
  @include lg-pc {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }
}

.instruction-wrap {
  display: flex;
  justify-content: flex-end;
}

.instruction-text-content {
  margin-right: 80px;
  margin-top: -160px;
  background-color: $white;
  padding: 80px 40px;

  @include lg-pc {
    margin-right: 0;
    padding: 40px 24px;
  }
}

.link-wrap {
  li {
    padding: 10px;
  }
}
</style>

