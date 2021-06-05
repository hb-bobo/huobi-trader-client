import React from 'react';
import { history } from 'umi';
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: { className: 'banner2-title', children: '火币自动交易' },
        content: {
          className: 'banner2-content',
          children: '',
        },
        button: {
          className: 'banner2-button',
          children: 'Dashboard',
          onClick: () => {
            history.push('/dashboard');
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: <span>©2018 Ant Motion All Rights Reserved</span>,
  },
};
