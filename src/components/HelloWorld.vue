<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: "TestComp",
  props: {
    comment: { required: true, type: Object as PropType<{ is_public: boolean }> }
  },
});
</script>

<template>
  <ElTooltip v-if="!comment.is_public">
    <ElTag>Text</ElTag>
  </ElTooltip>
</template>
