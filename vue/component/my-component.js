// my-component.js
export default {
    name: 'MyComponent',
    props: {
        count: String,
        message: String,
    },
    // data() {
    //     return {
    //         count: 0,
    //         message: 'hello',

    //     }
    // },
    template: `<div>count is {{ count }}</div>`
}