'use client'; // <--- 這行非常重要，沒有它會報錯

import React, { useState, useEffect } from 'react';
import { Calendar, CheckSquare, MapPin, Utensils, AlertTriangle, Info, Clock, Train, Coffee, Flag, ChevronDown, ChevronUp } from 'lucide-react';

// ... 接著貼上之前提供的完整 App 組件程式碼 (從 const App = () => { 開始 ...)
// ... 記得原本程式碼最後是 export default App; 
// 在 Next.js 中，你可以直接把 const App 改成 export default function Home

export default function Home() {
  // ... 這裡貼上原本 App 內部的所有邏輯與 return ...
  // (為了節省篇幅，請將前一個回答中的 App 組件內容完整貼在這裡)
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDay, setExpandedDay] = useState(null);
  const [checklist, setChecklist] = useState([
    { id: 1, task: '大阪馬拉松抽籤申請', deadline: '2025年7月-8月', status: false, urgent: false },
    { id: 2, task: '預約「粟 奈良町店」午餐', deadline: '2025年12月', status: false, urgent: true },
    { id: 3, task: '預約「松籟庵」豆腐懷石', deadline: '2026年1月', status: false, urgent: true },
    { id: 4, task: '預約「Steak Aoyama」神戶牛', deadline: '2026年1月', status: false, urgent: false },
    { id: 5, task: '搶票：有馬-京都直達巴士', deadline: '2026年1月24日', status: false, urgent: true, note: '乘車日前一個月又一天' },
    { id: 6, task: '確認六甲山索道運行狀況', deadline: '出發前', status: false, urgent: false },
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, status: !item.status } : item
    ));
  };

  const toggleDay = (day) => {
    if (expandedDay === day) {
      setExpandedDay(null);
    } else {
      setExpandedDay(day);
    }
  };

  const itineraryData = [
    {
      day: 'Day 1',
      date: '2/21 (六)',
      location: '大阪',
      title: '馬拉松報到與能量攝取',
      highlight: '報到',
      color: 'bg-blue-50',
      activities: [
        { time: '10:00', place: 'INTEX大阪', desc: '馬拉松報到。務必早上去，避免下午排隊消耗腿力。', type: 'event' },
        { time: '中午', place: '黑門市場', desc: '午餐：まぐろのエン時 (三色丼)。優質碳水與易消化蛋白質。', type: 'food' },
        { time: '晚餐', place: 'Trattoria & Pizzeria BEATO', desc: '義式碳水加載。位於大阪城附近，熟悉動線。', type: 'food' }
      ]
    },
    {
      day: 'Day 2',
      date: '2/22 (日)',
      location: '大阪',
      title: '大阪馬拉松 & 燒肉慶功',
      highlight: '賽事日',
      color: 'bg-yellow-50',
      activities: [
        { time: '09:15', place: '大阪城公園', desc: '起跑時間。賽事至16:15結束。', type: 'event' },
        { time: '傍晚', place: '炭火焼肉キョロちゃん', desc: '賽後蛋白質修復。森之宮站旁，需提前數週預約。', type: 'food' }
      ]
    },
    {
      day: 'Day 3',
      date: '2/23 (一)',
      location: '神戶',
      title: '港町散策與神戶牛',
      highlight: '美食',
      color: 'bg-red-50',
      activities: [
        { time: '10:00', place: '南京町', desc: '老祥記元祖豚饅，避開排隊高峰。', type: 'food' },
        { time: '中午', place: '神戶三宮', desc: '午餐：Steak Aoyama (需預約) 或 Mouriya (頂級)。', type: 'food' },
        { time: '15:30', place: '北野異人館', desc: '攝影黃金時刻，光影層次最豐富。', type: 'event' }
      ]
    },
    {
      day: 'Day 4',
      date: '2/24 (二)',
      location: '六甲/有馬',
      title: '溫泉穿越與物流挑戰',
      highlight: '物流警報',
      isWarning: true,
      color: 'bg-orange-50',
      activities: [
        { time: '物流', place: '六甲山區域', desc: '⚠️ 纜車全面停運。建議直接搭高速巴士至有馬溫泉。', type: 'warning' },
        { time: '下午', place: '有馬溫泉', desc: '金湯(緩解肌肉痠痛)、銀湯體驗。', type: 'event' },
        { time: '傍晚', place: '溫泉街', desc: '必吃：竹中肉店可樂餅、生碳酸煎餅(賞味期限5秒)。', type: 'food' },
        { time: '20:00', place: '移動至京都', desc: '⚠️ 關鍵物流：搭乘預訂好的特急巴士直達京都。', type: 'transport' }
      ]
    },
    {
      day: 'Day 5',
      date: '2/25 (三)',
      location: '京都',
      title: '北野天滿宮梅花祭',
      highlight: '不可移動',
      color: 'bg-pink-50',
      activities: [
        { time: '08:30', place: '北野天滿宮', desc: '梅花祭正日。參加上七軒藝妓野點茶會。務必早到。', type: 'event' },
        { time: '中午', place: '嵐山', desc: '搭乘嵐電前往嵐山。', type: 'transport' },
        { time: '午餐', place: '松籟庵', desc: '豆腐懷石料理。需提前一個月電話預約。', type: 'food' }
      ]
    },
    {
      day: 'Day 6',
      date: '2/26 (四)',
      location: '京都',
      title: '哲學與秘境',
      highlight: '文化',
      color: 'bg-purple-50',
      activities: [
        { time: '上午', place: '愛宕念佛寺', desc: '欣賞1200尊表情各異的石羅漢，遊客稀少。', type: 'event' },
        { time: '中午', place: '祇王寺', desc: '觀賞苔蘚庭園與侘寂之美。', type: 'event' },
        { time: '下午', place: 'Bread, Espresso', desc: '210年歷史茅草屋下享用下午茶。', type: 'food' }
      ]
    },
    {
      day: 'Day 7',
      date: '2/27 (五)',
      location: '奈良',
      title: '古都蔬菜與發酵',
      highlight: '慢活',
      color: 'bg-green-50',
      activities: [
        { time: '中午', place: '粟 奈良町店', desc: '大和蔬菜料理。預約極難，需透過信用卡秘書。', type: 'food' },
        { time: '下午', place: '奈良町', desc: 'Bolik Coffee 或 Kanakana 古民家咖啡巡禮。', type: 'food' },
        { time: '傍晚', place: '奈良公園', desc: '避開餵食時段，觀察鹿群自然休憩。', type: 'event' }
      ]
    },
    {
      day: 'Day 8',
      date: '2/28 (六)',
      location: '返程',
      title: '返程物流',
      highlight: '結束',
      color: 'bg-gray-50',
      activities: [
        { time: '上午', place: '奈良→KIX', desc: '搭乘機場巴士直達關西機場(約90分)。', type: 'transport' },
        { time: '檢查', place: '行李', desc: '確認生碳酸煎餅或易碎工藝品打包狀況。', type: 'warning' }
      ]
    }
  ];

  const renderIcon = (type) => {
    switch(type) {
      case 'food': return <Utensils size={16} className="text-orange-500" />;
      case 'transport': return <Train size={16} className="text-blue-500" />;
      case 'warning': return <AlertTriangle size={16} className="text-red-500" />;
      case 'event': return <MapPin size={16} className="text-purple-500" />;
      default: return <Info size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 h-screen flex flex-col font-sans text-gray-800 shadow-2xl overflow-hidden relative">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-800 text-white p-6 shadow-lg z-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold tracking-wider">2026 關西戰略</h1>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-widest">Cultural & Logistics Analysis</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-pink-400">Feb 21-28</div>
            <div className="text-xs text-gray-400">Expert Level</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('itinerary')}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'itinerary' ? 'text-indigo-800 border-b-2 border-indigo-800 bg-indigo-50' : 'text-gray-500'}`}
        >
          <Calendar size={18} /> 行程
        </button>
        <button 
          onClick={() => setActiveTab('logistics')}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'logistics' ? 'text-indigo-800 border-b-2 border-indigo-800 bg-indigo-50' : 'text-gray-500'}`}
        >
          <Flag size={18} /> 重點
        </button>
        <button 
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'checklist' ? 'text-indigo-800 border-b-2 border-indigo-800 bg-indigo-50' : 'text-gray-500'}`}
        >
          <CheckSquare size={18} /> 任務
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 scrollbar-hide">
        
        {/* Itinerary Tab */}
        {activeTab === 'itinerary' && (
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg border-l-4 border-yellow-400 text-sm text-gray-600 shadow-sm flex gap-2">
              <Info size={20} className="text-yellow-500 flex-shrink-0" />
              <p>本方案核心圍繞「大阪馬拉松」與「梅花祭」兩大不可移動節點。</p>
            </div>

            {itineraryData.map((item, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${expandedDay === index ? 'ring-2 ring-indigo-100' : ''}`}>
                <div 
                  className={`p-4 flex justify-between items-center cursor-pointer ${item.color}`}
                  onClick={() => toggleDay(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/80 w-12 h-12 rounded-lg flex flex-col items-center justify-center text-xs font-bold shadow-sm">
                      <span className="text-gray-500 text-[10px]">{item.day}</span>
                      <span className="text-indigo-900">{item.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                      <div className="flex gap-2 text-xs mt-1">
                        <span className="bg-white/60 px-2 py-0.5 rounded text-gray-600 border border-gray-200">{item.location}</span>
                        {item.isWarning && <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold flex items-center gap-1"><AlertTriangle size={10} /> 物流注意</span>}
                        {item.highlight === '不可移動' && <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded font-bold">★ 絕對日期</span>}
                      </div>
                    </div>
                  </div>
                  {expandedDay === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </div>

                {expandedDay === index && (
                  <div className="p-4 bg-white border-t border-gray-100">
                    <div className="space-y-4 relative">
                      {/* Timeline Line */}
                      <div className="absolute left-[5.5px] top-2 bottom-2 w-0.5 bg-gray-100"></div>

                      {item.activities.map((act, actIndex) => (
                        <div key={actIndex} className="relative flex gap-4">
                          <div className="z-10 mt-1">
                            <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm">
                              {renderIcon(act.type)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between mb-1">
                              <span className="text-sm font-bold text-indigo-900">{act.place}</span>
                              <span className="text-xs font-mono text-gray-400 bg-gray-50 px-1 rounded">{act.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{act.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="h-8"></div>
          </div>
        )}

        {/* Logistics/Highlights Tab */}
        {activeTab === 'logistics' && (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="text-red-500" />
                <h3 className="font-bold text-red-800 text-lg">物流紅色警報：六甲山</h3>
              </div>
              <p className="text-sm text-red-700 mb-4 leading-relaxed">
                2026年2月24日行程中，六甲山纜車與摩耶纜車將處於<strong className="font-bold">全面停運</strong>維修期。這是一個隱藏的物流陷阱。
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-gray-800 text-sm mb-2">💡 應對戰略</h4>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>放棄跨山纜車行程。</li>
                  <li>從三宮搭乘高速巴士 (Hankyu/JR Bus) 直達有馬溫泉。</li>
                  <li><span className="text-red-600 font-bold">關鍵行動：</span> 提前預訂有馬溫泉前往京都的直達巴士，避免在山區轉車浪費時間。</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="text-indigo-600" />
                <h3 className="font-bold text-indigo-900 text-lg">飲食戰略學</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-700 mb-1 border-b border-indigo-200 pb-1">賽前 (大阪)</h4>
                  <p className="text-sm text-gray-600">專注於可控的碳水化合物。推薦<span className="font-bold text-indigo-700">Maguro Entoki 鮪魚三色丼</span>，優質米飯補充肝醣且不造成腸胃負擔。</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-700 mb-1 border-b border-indigo-200 pb-1">賽後 (大阪/神戶)</h4>
                  <p className="text-sm text-gray-600">蛋白質修復。首選<span className="font-bold text-indigo-700">町燒肉 Harami</span> (橫膈膜) 與神戶牛排 (赤穗鹽食用法)。</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-700 mb-1 border-b border-indigo-200 pb-1">療癒 (京都/奈良)</h4>
                  <p className="text-sm text-gray-600">回歸素樸。嵐山<span className="font-bold text-indigo-700">豆腐懷石</span>與奈良<span className="font-bold text-indigo-700">大和蔬菜</span>，讓身體從高強度的賽事壓力中復原。</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Checklist Tab */}
        {activeTab === 'checklist' && (
          <div className="space-y-4">
             <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md mb-6">
               <div className="flex justify-between items-end">
                 <div>
                    <h3 className="font-bold text-lg">執行進度</h3>
                    <p className="text-xs text-gray-400 mt-1">預約如同排雷，必須精準執行。</p>
                 </div>
                 <div className="text-3xl font-bold text-green-400">
                    {Math.round((checklist.filter(i => i.status).length / checklist.length) * 100)}%
                 </div>
               </div>
               <div className="w-full bg-gray-700 h-2 rounded-full mt-3">
                 <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${(checklist.filter(i => i.status).length / checklist.length) * 100}%` }}
                 ></div>
               </div>
             </div>

             <h3 className="font-bold text-gray-800 px-1">關鍵行動清單</h3>
             <div className="space-y-2">
               {checklist.map((item) => (
                 <div 
                    key={item.id} 
                    className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${item.status ? 'bg-gray-50 border-gray-200 opacity-60' : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm'}`}
                    onClick={() => toggleCheck(item.id)}
                 >
                   <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${item.status ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'}`}>
                     {item.status && <CheckSquare size={14} className="text-white" />}
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between items-start">
                       <span className={`text-sm font-medium ${item.status ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{item.task}</span>
                       {item.urgent && !item.status && <span className="bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Critical</span>}
                     </div>
                     <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                       <Clock size={10} />
                       <span>期限: {item.deadline}</span>
                     </div>
                     {item.note && <div className="text-xs text-orange-600 mt-1 font-medium">{item.note}</div>}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>

      {/* Footer Metaphor */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 p-3 pb-6 z-20">
         <p className="text-[10px] text-center text-gray-400 italic max-w-xs mx-auto">
           "這份規劃就像穿越地雷迷宮：大阪馬拉松是起點，梅花祭是終點，而我們必須精準避開六甲山交通的陷阱。"
         </p>
      </div>
    </div>
  );
}
