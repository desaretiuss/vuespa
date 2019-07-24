import Vue from 'vue'
import Post from '../../../theme/Post.vue'

describe('Post.vue', () => {
  it('should render the link', () => {
    const PostConstructor = Vue.extend(Post)
    const comp = new PostConstructor({
      propsData: {
        link: 'http://www.pluralsight.com'
      }
    }).$mount()
    console.log(comp)
  })
})
