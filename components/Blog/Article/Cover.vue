<script lang="ts" setup>
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
                <h1 class="fs-4 fw-medium text-primary">前端開發 x 職涯成長</h1>
                <span class="tag-primary ms-2">最新文章</span>
              </div>
              <h3 class="card-title">自學前端不用怕：從零開始的三大關鍵</h3>
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
