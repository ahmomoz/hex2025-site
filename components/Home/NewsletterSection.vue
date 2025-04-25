<script setup></script>

<template>
  <section class="home-newsletter-section">
    <div class="container-fluid">
      <div class="row">
        <div class="image-wrap col-xxl-6 bg"></div>
        <div class="content-wrap col-xxl-6 bg">
          <div class="bg-white px-6 py-10 p-lg-13">
            <h2>訂閱電子報</h2>
            <p class="fs-5 fw-medium mt-4">
              立即訂閱，搶先掌握
              <span class="text-primary">前端 x 職涯</span>
              的獨家資訊！
            </p>
            <div class="row mt-6">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入您的大名"
              />
              <input
                type="text"
                class="form-control mt-2"
                placeholder="請輸入您的電子信箱"
              />
            </div>
            <a href="#" class="btn btn-outline-primary fw-bold lh-base mt-6">
              啟動訂閱
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-newsletter-section {
  border-top: 1px solid $brand-02;
  border-bottom: 1px solid $brand-02;
}

.image-wrap {
  background-image: url(/assets/images/backgrounds/bg-3.jpg);
  padding: 300px 0;

  @include pad {
    padding: 175px 0;
  }
}

.content-wrap {
  background-image: url(/assets/images/backgrounds/bg-4.jpg);
  padding: 172px 80px;

  @include lg-pc {
    padding: 12px;
  }
}
</style>
