/*      ,0 mouse 초밥
        '1',1 cow 라멘
        '2',2 tiger 도시락
        '3',3 rabbit 훠궈
        '4',4 dragon 딤섬
        '5',5 snake 샌드위치
        '6',6 horse 햄버거
        '7',7 sheep 피자
        '8',8 monkey 치킨
        '9',9 chick 짜장면
        '10',10 dog 냉면
        '11',11 pig 스파게티
        12 카레
        13 샐러드
        14 스테이크
        15 고기구이
        */

const qnaList = [
    {
        q: '1. 간단하게 먹기? or 든든하게 먹기?',
        a: [
          { answer: 'a. 간단하게 먹고싶어!', type: [2,5,6,13] },
          { answer: 'b. 든든하게 먹어야지!', type: [0,1,2,3,4,6,7,8,9,10,11,12,14,15] },
      
        ]
      },
      {
        q: '2. 난 무슨 파? ',
        a: [
          { answer: 'a. 양식파!', type: [5,6,7,8,11,13,14] },
          { answer: 'b. 일식이 좋아!', type: [0,1,12] },
          { answer: 'c. 중식!', type: [3,4,9] },
          { answer: 'd. 뭐니뭐니해도 한식이지~', type: [10,15] },
  
        ]
      },
      {
        q: '3. 고기 싫어? 좋아?',
        a: [
          { answer: 'a. 고기 좋아!', type: [8,14,15 ] },
          { answer: 'b. 고기 별로 안 땡겨..', type: [0,1,2,9,10,11,12] },
        ]
      },
      {
        q: '4. 면을 먹고 싶다? 아니다',
        a: [
          { answer: 'a. 난 누가 뭐래도 면파야!', type: [9,10,11] },
          { answer: 'b. 난 면 싫어', type: [0,2,3,4,5,6,7,8,12,13,14,15] },
          { answer: 'c. 상관없어', type: [0,1,2,3,5,4,5,6,7,8,9,10,11,12,13,14,15] },
        ]
      },
      {
        q: '5. 기름진거! 아닌거!',
        a: [
          { answer: 'a. 느끼한거! 기름진거! 먹고싶다!', type: [1,3,6,7,8,9,11,14,15] },
          { answer: 'b. 건강식! 땡겨', type: [0,2,4,5,10,12,13] },
          { answer: 'c. 난 상관없어.', type: [0,1,2,3,5,4,6,7,8,9,10,11,12,13,14,15] }
        ]
      },
      {
        q: '6. 따뜻한 음식? 차가운 음식?',
        a: [
          { answer: 'a. 속이 따듯하게 따뜻한 음식', type: [1,3,4,6,7,8,9,11,12,14,15] },
          { answer: 'b. 더워! 차가운 음식', type: [0,5,10,13] },
          { answer: 'c. 난 상관없어.', type: [0,1,2,3,5,4,6,7,8,9,10,11,12,13,14,15] }
        ]
      },
      {
        q: '7. 분위기 차리고 싶은 날?(ex 기념일)',
        a: [
          { answer: 'a. 분위기는 무슨 그냥 평범한 날~ ', type: [1,2,5,6,7,8,9,10,11,12 ] },
          { answer: 'b. 분위기 좋은! 고급진 음식 원해!! ', type: [0,3,4,11,14,15 ] },
        ]
      },
      {
        q: '8. 음식을 먹을 장소는?!',
        a: [
          { answer: 'a. 요즘 집에서 먹는게 최고지~', type: [0,6,7,8,9 ] },
          { answer: 'b. 난 원해! 피크닉!!', type: [2,5,6,7,8,13]},
          { answer: 'c. 음식점 갈거야', type: [1,3,4,9,10,11,12,14,15] },
        ]
      },
    
      {
        q: '9. 음식을 시킬 때 유형은?',
        a: [
          { answer: 'a. 무슨 소리 무조건 1인 1메뉴', type: [0,1,2,5,6,9,10,11,12,14 ] },
          { answer: 'b. 가운데 놓고 같이 먹을래!', type: [3,4,7,8,15] },
        ]
      }
        
  ]
  
  const infoList = [
    {
      name: '초밥',
      desc: '일식 중에 베스트 오브 베스트!! 탱글한 회와 새콤달콤한 밥의 만남! 분위기 좋은 초밥집가서 먹는거 어떨까요?'
    },
    {
      name: '라멘',
      desc: '후루룩 짭짭 맛좋은 라멘(라면)~ 소유라멘, 미소라멘, 차슈라멘~ 뜨끈한 국물과 면발의 조화! 맛보러 가실까요? '
    },
    {
      name: '도시락',
      desc: '아~ 뭐 먹을지 귀찮아! 도시락 한 판 주이소~ 간단하고 맛있게 해결하자!'
    },
    {
      name: '훠궈',
      desc: '백탕, 홍탕 두 탕에 무엇을 넣어 먹을까? 기대가 되는 훠궈!! 골라 넣어 먹을 수 있는 맛좋은 훠궈. 너 당첨이다!'
    },
    {
      name: '딤섬',
      desc: '딤섬 한 입이면 세상을 가진 느낌! 딤섬의 육즙의 풍미! 여기가 대만인가? 딤섬을 숟가락에 올리고 젓가락으로 구멍을 뚫어 국물 먼저 맛보자! '
    },
    {
      name: '샌드위치',
      desc: '서브웨이로 가서 내가 원하는 재료를 넣어 먹어볼까? 간단하게 먹고 싶은데! 딱이다~ 알차게 이번 식사 해결해볼까?'
    },
    {
      name: '햄버거',
      desc: '햄버거가 은근 알찬 음식이라구~ 채소,고기까지 다 들어있는 패스트 푸드계의 엄친아!! 가까운 패스트푸드점으로 달려가자~'
    },
    {
      name: '피자',
      desc: '치즈 가득! 피자 한판은 정말 사르르 녹아! 맛있겠다! 피자 너 당첨이다!'
    },
    {
      name: '치킨',
      desc: '누가 뭐래도 치킨은 진리! 남녀노소 가리지 않는 치킨!! 가장 대표적인 맛있는 음식. 날 위해 보상해줄까? 튀긴 치킨, 구운 치킨 뭘 먹어볼까?'
    },
    {
      name: '짜장면',
      desc: '달콤 짭짤한 짜장면! 중식의 일인자! 짜장면 널 좋아해'
    },
    {
      name: '냉면',
      desc: '와 여름이다! 더운데 이럴 땐 냉면 한 사바리지!! 냉면먹다가 코로 나오지 않게 조심!'
    },
    {
      name: '스파게티',
      desc: '스파게티 너무 좋아! 근사한 레스토랑으로 가볼까요? 토마토,크림,오일 뭘 먹어볼까? 기대된다!'
    },
    {
      name: '카레',
      desc: '카레는 건강에도 좋고 맛도 좋은 음식! 내가 좋아하는 토핑으로 카레 위에 올려보자!'
    },
    {
      name: '샐러드',
      desc: '난 건강한 한끼를 먹고싶어! 샐러드도 든든하게 느껴진다구요!'
    },
    {
      name: '스테이크',
      desc: '스테이크는 분위기 좋은 레스토랑에서 먹기 최고지! 좋아하는 사람들과 함께 가실까요?'
    },
    {
      name: '고기구이',
      desc: '삽겹살 먹으러 고고! 소주 한 잔과 함께라면 어디든 갈 수 있어! 고기구이 싫어하는 사람 있으면 나와보라고 해! 오늘 식사는 고기!당첨이닷! '
    },
  ]