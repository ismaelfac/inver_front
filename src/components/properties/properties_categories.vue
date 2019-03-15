<template>
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12"
        style="min-width: 100%; max-height: 510px; overflow: scroll; "
      >
        <nav>
          <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Arriendos</a
            >
            <a
              class="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              >En Venta</a
            >
            <a
              class="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              >Inversiones</a
            >
            <a
              class="nav-item nav-link"
              id="nav-about-tab"
              data-toggle="tab"
              href="#nav-about"
              role="tab"
              aria-controls="nav-about"
              aria-selected="false"
              >Permutados</a
            >
          </div>
        </nav>
        <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <properties-favorites></properties-favorites>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            Et et consectetur ipsum labore excepteur est proident excepteur ad
            velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt
            anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit
            non irure adipisicing aliqua ullamco irure incididunt irure non esse
            consectetur nostrud minim non minim occaecat. Amet duis do nisi duis
            veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
            sit. Exercitation mollit sit culpa nisi culpa non adipisicing
            reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad
            duis occaecat ex.
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            Et et consectetur ipsum labore excepteur est proident excepteur ad
            velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt
            anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit
            non irure adipisicing aliqua ullamco irure incididunt irure non esse
            consectetur nostrud minim non minim occaecat. Amet duis do nisi duis
            veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
            sit. Exercitation mollit sit culpa nisi culpa non adipisicing
            reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad
            duis occaecat ex.
          </div>
          <div
            class="tab-pane fade"
            id="nav-about"
            role="tabpanel"
            aria-labelledby="nav-about-tab"
          >
            Et et consectetur ipsum labore excepteur est proident excepteur ad
            velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt
            anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit
            non irure adipisicing aliqua ullamco irure incididunt irure non esse
            consectetur nostrud minim non minim occaecat. Amet duis do nisi duis
            veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
            sit. Exercitation mollit sit culpa nisi culpa non adipisicing
            reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad
            duis occaecat ex.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PropertiesFavorites from "./properties_favorites.vue";
export default {
  name: "PropertiesCategories",
  components: {
    PropertiesFavorites
  }
};
</script>
<style lang="css" scoped>
nav > .nav.nav-tabs{
  border: none;
    color:#fff;
    background:#272e38;
    border-radius:0;

}
nav > div a.nav-item.nav-link,
nav > div a.nav-item.nav-link.active
{
  border: none;
    padding: 18px 25px;
    color:#fff;
    background:#272e38;
    border-radius:0;
}

nav > div a.nav-item.nav-link.active:after
 {
  content: "";
  position: relative;
  bottom: -60px;
  left: -10%;
  border: 15px solid transparent;
  border-top-color: #95c41f ;
}
.tab-content{
  background: #fdfdfd;
    line-height: 25px;
    border: 1px solid #ddd;
    border-top:5px solid #95c41f;
    border-bottom:5px solid #95c41f;
    padding:30px 25px;
}

nav > div a.nav-item.nav-link:hover,
nav > div a.nav-item.nav-link:focus
{
  border: none;
    background: #95c41f;
    color:#fff;
    border-radius:0;
    transition:background 0.20s linear;
}
</style>
