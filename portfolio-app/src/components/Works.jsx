import React from 'react';
import "../styles/layout.css";

const appList = [
  {
    title: 'レシピアプリ "SugMog"',
    description: '冷蔵庫の食材からレシピを検索できるアプリです。',
    image: 'https://via.placeholder.com/300',
    link: '#', // 将来的に詳細ページとか
    
  },
  {
    title: '育児記録アプリ "MamaNote"',
    description: '子どもの成長記録を簡単に残せるアプリです。',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: '地域イベント検索 "FamMap"',
    description: '近くの子育てイベントをマップで探せるアプリです。',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const Works = () => {
  return (
    <section id="works" className="py-5">
        <div className=' d-flex justify-content-center'>
            <h3 className="mb-4">作成した作品（※予定）</h3>
        </div>
    
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap gap-3 justify-content-start">
          {appList.map((app, index) => (
            <div className="card" style={{ width: '15rem' }} key={index}>
              <img src={app.image} className="card-img-top" alt={app.title} />
              <div className="card-body">
                <h5 className="card-title">{app.title}</h5>
                <p className="card-text">{app.description}</p>
                <a href={app.link} className="btn btn-primary">詳しく見る</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

