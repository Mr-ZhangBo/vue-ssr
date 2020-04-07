<template>
    <div>
        index page
        <p @click="$store.commit('add')">{{$store.state.count}}</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>