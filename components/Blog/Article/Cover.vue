<script lang="ts" setup>
useSeoMeta({
  title: "自學前端不用怕：從零開始的三大關鍵",
  description: " 嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
  ogTitle: "自學前端不用怕：從零開始的三大關鍵",
  ogDescription: " 嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
});
</script>

<template>
  <section class="blog-articleCover-section border-top-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="image-wrap col-xxl-6 bg"></div>
        <div class="content-wrap col-xxl-6 bg">
          <article class="article-card card bg-transparent rounded-0">
            <div class="card-body h-100 p-0">
              <time>
                <p class="fw-medium lh-base">
                  2024/10/21
                </p>
              </time>
              <div class="article-tag-wrap f-align-center mt-1">
                <h3 class="fs-4 fw-medium text-primary">前端開發 x 職涯成長</h3>
                <span class="tag-primary ms-2">最新文章</span>
              </div>
              <h1 class="card-title fs-3">自學前端不用怕：從零開始的三大關鍵</h1>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog-newArticle-section {
  @include lg-pc {
    margin-top: -200px;
  }
}
.image-wrap {
  background-image: url(/assets/images/backgrounds/bg-5.jpg);

  padding: 206px 0;

  @include pad {
    padding: 187px 0;
  }

  img {
    @include mobile {
      width: 100%;
    }
  }
}
.content-wrap {
  padding: 206px 312px 206px 24px;

  @include xxl-pc {
    padding: 48px 12px;
  }
}
.text-truncate-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
