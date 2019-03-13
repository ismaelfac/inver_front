<template>
    <div>
        <template v-if="!currentUser">
            <!-- SLIDER SECTION START -->
            <slider></slider>
            <!-- SLIDER SECTION END -->

            <!-- Start page content -->
            <section id="page-content" class="page-wrapper">
                <!--PROPERTIEES CATEGORIES-->
                <properties-categories></properties-categories>
                <!--PROPERTIEES CATEGORIES-->

                <!-- BLOG AREA START -->
                <div class="blog-area pb-60">
                    <h2>posts</h2>
                </div>
                <!-- BLOG AREA END -->

                <!-- BRAND AREA START -->
                brands
                <!-- BRAND AREA END -->

                <!-- SUBSCRIBE AREA START -->
                SUBSCRIBE
                <!-- SUBSCRIBE AREA END -->
            </section>
            <!-- End page content -->
        </template>
        <template v-else>
            <panel-client :id="currentUser.id"></panel-client>
        </template>
    </div>
</template>
<script>
import Slider from "./Slider.vue";
import PropertiesCategories from "../../components/properties/properties_categories.vue";
export default {
    name: "Content",
    components: {
        Slider,
        PropertiesCategories
    },
    data() {
        return {
            currentUser: false
        };
    }
};
</script>
<style lang="scss"></style>
