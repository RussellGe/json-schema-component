import { createApp, defineComponent, h, reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld';
function renderHelloWorld(num: number) {
  return <HelloWorld age={num} />;
}

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'russell',
    });

    const numberRef = ref(1);

    // const number = numberRef.value

    return () => {
      const count = numberRef.value * 2;
      console.log(state.name);

      return (
        <div id="app">
          <p>{state.name + count}</p>
          <input type="text" v-model={state.name} />
          {renderHelloWorld(numberRef.value)}
        </div>
      );

      // return h('div', { id: 'app' }, [
      //   h('img', {
      //     alt: 'Vue logo',
      //     src: img,
      //   }),
      //   h('p', state.name + number),
      // ])
    };
  },
});
