<template>
  <div class="prism-container">
    <PrismEditor
      v-model="editorCode"
      class="my-editor mb-4"
      :highlight="highlighter"
      line-numbers
      :readonly="readonly"
    />
  </div>
</template>

<script setup lang="ts">
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import prism from 'prismjs';
import 'prismjs/components/prism-less';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.css';
import { ref } from 'vue';

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: true,
  },
  language: {
    type: String,
    default: 'js',
  },
  theme: {
    type: String,
    default: 'tomorrow',
  },
  height: {
    type: Number,
    default: 400,
  },
  width: {
    type: [Number, String],
    default: '100%',
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const editorCode = ref(props.value);
console.log('prism.languages: ', prism.languages);
const highlighter = (code: string) => prism.highlight(
  code,
  prism.languages[props.language],
  props.language,
);
</script>

<style lang="less" scoped>
.prism-container {
  background: #2d2d2d;
  min-height: 200px;
  max-height: 600px;
  border-radius: 5px;
  overflow-y: scroll;

  .my-editor {
    color: #ccc;

    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  /deep/.prism-editor__textarea {
    outline: none !important;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }
}
</style>
