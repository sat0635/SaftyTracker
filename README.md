# SaftyTracker
2019 부산/울산창조경제혁신센터 안전메이커톤에서 대상을 수상한 봇듀오팀 작품의 서버&amp;WEB 파트입니다.
아래에 보이는 그림은 전체 작품의 구성도이며 저희가 만든 파트는 SERVER입니다.
<img width="923" alt="concept1" src="https://user-images.githubusercontent.com/29095448/61172605-8e871780-a5c1-11e9-8f9b-0a28c9508649.png">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/61172607-90e97180-a5c1-11e9-92d5-6f99c258fe77.png">

<h3>views.py in Django</h3></br>


```
//해당 섹션의 라즈베리파이에서 인식된 새로운 사용자의 정보를 API를 통해 받는다.
//해당 정보는 해당 섹션 테이블에 추가됩으로써 React 웹에서 인식할 수 있게 한다.
def insert_state_user(request, userid, state):
    instance = User(id=userid, state=state)
    instance.save()
```

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/61966548-d2d8d580-b00d-11e9-99c1-7a877e48bbf7.PNG">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/61966539-cb193100-b00d-11e9-8ac6-b171cd23cf6a.PNG">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/61966543-cce2f480-b00d-11e9-9118-fd98bf0f8bab.jpg">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/61966527-c6547d00-b00d-11e9-8158-556aec6924bd.jpg">

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/61966546-ceacb800-b00d-11e9-8be0-0d102fe361cf.jpg">



작품 소개 영상
https://www.youtube.com/embed/5lTYLHcKNWA

<img width="586" alt="concept2" src="https://user-images.githubusercontent.com/29095448/65398008-7e748b00-ddef-11e9-81e8-30ed01e9945b.jpg">
