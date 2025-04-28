<script lang="ts" setup>
/* data */
interface HighLightArticleData {
  id: number;
  thumbnailUrl: string;
  tag: string;
  category?: string;
  title: string;
  content: string;
  date: string;
}
const highlightArticles: HighLightArticleData[] = [
  {
    id: 1,
    thumbnailUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/article-thumbnails/article-thumbnails-1.png",
    tag: "前端開發 x 職涯成長",
    category: "最新文章",
    title: "自學前端不用怕：從零開始的三大關鍵",
    content:
      "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
    date: "2024/10/21",
  },
];
</script>

<template>
  <section class="blog-newArticle-section border-top-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="image-wrap col-xxl-6 bg"></div>
        <div class="content-wrap col-xxl-6 bg">
          <article class="article-card card bg-transparent rounded-0">
            <div class="card-body h-100 p-0">
              <time>
                <p class="fw-medium lh-base">
                  {{ highlightArticles[0].date }}
                </p>
              </time>
              <div class="article-tag-wrap f-align-center mt-1">
                <h4 class="text-primary">{{ highlightArticles[0].tag }}</h4>
                <span class="tag-primary ms-2">最新文章</span>
              </div>
              <h3 class="card-title">{{ highlightArticles[0].title }}</h3>
              <p
                class="card-text text-truncate-2 mt-2"
                style="max-height: 48px"
              >
                {{ highlightArticles[0].content }}
              </p>
              <div class="mt-auto pt-4">
                <NuxtLink
                  :to="`/blogs/${highlightArticles[0].id}`"
                  class="btn btn-outline-black lh-base"
                >
                  閱讀內文
                </NuxtLink>
              </div>
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
