import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const datalink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://www.tiobe.com/tiobe-index/"
      >{text}</Interactive>
);
 

  return (
    <div>


      <div>
      <p id="first">
      <a href="/Work2"
      >2015-2016</a>
      </p>
      </div>

      <div>
      <h4>
      Users by Location
      </h4>
      </div>

      <div>
        <p>
        오디오가이
음악과 음향 [27] - 꿈을 이루는 방법
Written by 운영자
12.10.03, 23:41

집에 아이가 둘이나 있으니 글을 쓰기가 정말 보통일이 아닙니다. 

때론 결혼전에. 그리고 아이가 생기기 전에 그나마 조금이라도 부지런히(?) 칼럼을 써놓기가 잘했다는 생각이 드는군요. 


이전에 썼던 글을 가끔씩 다시 보면 참으로 쑥쓰럽고 창피하고 그럽니다. 

이제는 영자도 불혹을 바라보다보니 삼십대 초반에 쓴글들을 보면 정말 더욱 더 부끄럽게 느껴지기도 합니다. 

그때는 그렇게나 얄팍한 지식을 무엇이 그것이 그리도 대단한 것 인냥.. 혼자 떠들었나 하는 생각이 들기도 하고 

그간에 왜 많은 선배분들이 침묵을 하시는것일까 하는 그 마음을 아주 조금은 알것 같기도 합니다. 


오늘은 조금더 솔직하고 재미있는 이야기를 한번 해볼까 합니다. 

많은 사람들이 묻습니다. 

물론 제게 직접적으로 묻지는 않고(하지만 다들 궁금해 하는 것 같습니다.) 함께 일하는 남송지씨에게 많이들 물어보는데요.. 

"오디오가이는 어떻게 그 많은 작업 의뢰들이 들어보는것인가요?" 

"오디오가이 최정훈씨는 많은 작업 의뢰가 들어올 수 있도록 어떻게 하는 것일까요?" 

라는 부분입니다. 

이것 정말 여러분들도 궁금한것이 아니신지요? 


저역시 다른 엔지니어들은 어떻게 해서 그 아티스트들과 함께 작업을 하게 되는것일까? 부터 시작해서 어찌보면 모두들 서로 참 궁금한 내용일것 같기도 한 생각이 듭니다만. 

오디오가이가 생기고 12년동안 아직 이에 관한 이야기는 한번 도 없었었던 것 같습니다. 


오늘은 오랫만에 밤에 맘먹고 쓰는 칼럼이니 만큼 영자의 주특기 대로 이 이야기 하다가.. 또 저이야기 하다가..막 왔다 갔다 하겠습니다 

기껏 긴글 열심히 읽었는데 내용 없다고 저 욕하지 말아주셔용~~^^ 



얼마전에 울산에서 서울을 오는 KTX안에서 오랫만에 종이신문을 꼼꼼히 읽어보고는 내심 충격을 받았습니다. 

제가 개인적으로 좋아하지 않는 J 사의 신문이기는 하였지만. 

신문안에 어찌나 주옥같은 내용들이 그리도 많던지요.. 


쉽게 인터넷에서 보는(특히 네이버의 메인 페이지화면) 정보들이 얼마나 시야와 폭이 좁은 것인가.. 하고 정말 놀랐습니다. 

인터넷이 정보의 바다. 홍수라고들 표현을 하지만 

이로인해서 우리가 얼마나 폭이 좁은 지식들을 얻게되는것인가. 

얼마나 편향적인 뉴스와 기사들을 보고 있는 것인가.. 하는 내용들.. 

네이버 메인페이지 뉴스와 두세가지의 성향이 다른 종이신물들을 보면 인터넷이 우리의 시각을 마치 경주마 처럼 좁히고 있다는것을 알게되었지요. 

단순히 스마트폰 세상이 되면서 사람들은 종이책을 읽는것을 부쩍 줄이게 된것 같습니다. 

그리고 스마트폰이나 패드등에서 내용을 보는것은 게임이나 짤막한 기사와 소통. 

아무래도 종이매체를 통할때에 비해서는 집중도가 확연이 떨어지는것이 아닐까요? 


물론 인터넷을 통해서 얻을 수 있는 좋은 정보 역시 너무너무 많다고 생각하지만 

저는 갈수록 인터넷에서는 뉴스들을 보지 않게 되고. 
</p>
</div>

      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/Work1"
        >Feb 2018</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/Work2"
        >JavaScript 순위변화</Interactive>
      </div>

      <div id="blogmenu" className="bottom-nav">
        <div className="row">
          <div className="col-3">
            <a href="#">
              <i className="fa fa-clipboard fa-2x"></i>
              <p>Dashboard</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <i className="fa fa-clipboard fa-2x"></i>
              Dashboard
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <i className="fa fa-clipboard fa-2x"></i>
              Dashboard
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <i className="fa fa-clipboard fa-2x"></i>
              Dashboard
            </a>
          </div>
        </div>
        {/* <ul>
        <table>
          <tr>
            <td>
              <li><a href="#">
                <i className="fa fa-clipboard fa-2x"></i>
                Dashboard
              </a></li>
              <li><a href="#">
                <i className="far fa-chart-bar fa-2x"></i>
                Analytics
              </a></li>
              <li><a href="#">
                <i className="fas fa-align-right fa-2x"></i>
                CPanel
              </a></li>
              <li><a href="#">
                <i className="fa fa-clipboard fa-2x"></i>
                Messages
              </a></li>
            </td>
          </tr>
        </table>
        </ul> */}
      </div>

    </div>
  );
}
