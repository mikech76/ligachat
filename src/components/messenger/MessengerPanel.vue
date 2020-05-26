<template>

  <div class="messenger-panel">

    <div class="messenger-panel__list"
         :class="isActive('contact')"
         @click="$emit('setActivePanel', 'contact')"
    >
      <Avatar :url="user.url"></Avatar>
      <span class="title">{{user.name}}</span>
      <div class="close">
        <button @click.stop="$parent.$emit('closeMessendger', user.id)">x</button>
      </div>
    </div>

    <div class="messenger-panel__chat"
         :class="isActive('chat')"
         @click="$emit('setActivePanel', 'chat')"
    >
      <template v-if="contact">
      <span class="title">
        {{user.id ===  contact.id ? 'Избранное' :  contact.name }}
      </span>
        <Avatar :url="contact.url"></Avatar>
      </template>
    </div>
  </div>
  <!-- /.messenger-panel -->
</template>

<script>
  import Avatar from '@/components/messenger/Avatar.vue'

  export default {
    name: 'MessengerPanel',

    props: {
      user:        Object,
      contact:     Object,
      activePanel: {
        type:    String,
        default: 'contact',
      },
    },

    methods: {

      isActive(panel) {
        return this.activePanel === panel ? 'active' : '';
      },
    },

    components: {
      Avatar,
    },
  }
</script>


<style lang="scss" src="@/components/messenger/css/_messenger-panel.scss"></style>
