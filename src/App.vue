<template>
    <Header />
    <div class="fullHeight">
        <router-view />
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: { Header, Footer },
}
</script>

<style lang="scss">
</style>
