import React from 'react'
import {shallow} from 'enzyme'

import BookList from '.'

describe('BookList', () => {
  it('Shows a loading bar when loading', () => {
        const props = {
            loading: true
        }
        const wrapper = shallow(<BookList {...props}/>)
        expect(wrapper.find('.loading').length).toEqual(1)
    })

  it('Shows a error bar when error occurs', () => {
        const props = {
            error: {
                "message": "Something went wrong"
            }
        }
        const wrapper = shallow(<BookList {...props}/>)
        expect(wrapper.find('.error').length).toEqual(1)
    })

    it('Shows a list of books', () => {
        const props = {
            books: [
                {name: "Refactoring", id: 1},
                {name: "Domain Driven Design", id:2},
                {name: "Building Micro-service", id: 3}
            ]
        }
        const wrapper = shallow(<BookList {...props}/>)
        expect(wrapper.find('.book .title').length).toEqual(3)
    })
})