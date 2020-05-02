import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addChaPost,
  deleteChaPost,
  selectChaPost
} from './chaPostSlice'
import './Body.css'

interface postType {
    title: string,
    content: string,
    url: string,
}

interface propsType {
    chapost: Array<postType>
}

export function Body() {
  const chaPost = useSelector(selectChaPost);
  // console.log('---', chaPost)
  return (
    <div className="body">
        <ul>
          {
              chaPost.map((post: postType, index: number) => {
                  return (
                      <li key={index}>
                          <img src="https://via.placeholder.com/150" />
                          <div>
                              <a href={post.url}><h2>{post.title}</h2></a>
                              <p>{post.content}</p>
                          </div>
                      </li>
                  )
              })
          }
        </ul>
    </div>
  );
}
