<template lang="">
    <div v-if="data.id" class="c_episode-card">
        <div class="c_episode-card_image-container">
            <div class="c_episode-card_image-container_image">
                <ImageFrame :src="data.image" :alt="data.name" class="c_episode-card_image-container_image_image"/>
            </div>
            <div class="c_episode-card_image-container_rating">
                <p>{{data.rating}}</p>
            </div>
        </div>
        <div class="c_episode-card_information-container">
            <div class="c_episode-card_information-container_title">
                <Title :text="data.name" type="h2" />
            </div>
            <div class="c_episode-card_information-container_summary">
                <Description :text="data.summary"/>
            </div>
            <div class="c_episode-card_information-container_other-information">
                <div>
                    <Title text="Season" type="h4"/>
                    <p>{{data.season}}</p>
                </div>
                <div>
                    <Title text="Air Date" type="h4"/>
                    <p>{{data.airdate}}</p>
                </div>
                <div>
                    <Title text="Runtime" type="h4"/>
                    <p>{{data.runtime}}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        Nothing to show
    </div>
</template>
<script setup lang="ts">
    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';
    import ImageFrame from '../components/ImageFrame.vue';
    import { EpisodeCard } from "../interfaces/Components";
    import { Episode } from "../interfaces/Data";


    const props = defineProps<EpisodeCard>();

    const { data: Episode } = props;

</script>
<style lang="css">
    .c_episode-card{
        display: flex;
        flex-direction: row;
        gap: 50px;
        max-width: 1200px;
    }
    .c_episode-card_image-container{
        display: flex;
        flex-direction: column;
    }
    .c_episode-card_image-container_image{
        width: 400px;
        height: 500px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .c_episode-card_image-container_image_image {
        height: 100%;
    }
    .c_episode-card_image-container_rating{}
    .c_episode-card_information-container{
        display: flex;
        flex-direction: column;
    }
    .c_episode-card_information-container_title{}
    .c_episode-card_information-container_summary{}
    .c_episode-card_information-container_other-information{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>