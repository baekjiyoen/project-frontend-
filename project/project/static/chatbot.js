// 채팅 메시지를 표시할 DOM
const chatMessages = document.querySelector('#chat-messages');
// 사용자 입력 필드
const userInput = document.querySelector('#user-input');
// 전송 버튼
const sendButton = document.querySelector('#send-button');

// 메시지 추가 함수
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';

    // 메시지 스타일 적용
    if (sender === '나') {
        messageElement.classList.add('user-message'); // 사용자 메시지는 오른쪽        
    } else {
        messageElement.classList.add('bot-message'); // 챗봇 메시지는 왼쪽
    }

    message = sender + ": " + message;
    messageElement.textContent = message;

    // 채팅 영역에 메시지 추가
    chatMessages.appendChild(messageElement);
    // 화면 스크롤을 자동으로 내리기
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 전송 버튼 클릭 이벤트 처리
sendButton.addEventListener('click', function () {
    const message = userInput.value.trim();
    if (message.length === 0) return; // 메시지가 비어있으면 리턴

    // 사용자 메시지 화면에 추가
    addMessage('나', message);
    userInput.value = ''; // 입력 필드 초기화

    // 챗봇의 응답 추가 (예: 테스트용)
    setTimeout(() => addMessage('챗봇', '안녕하세요! 도와드릴까요?'), 500);
});

// 사용자 입력 필드에서 Enter 키 이벤트 처리
userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendButton.click(); // Enter 키를 눌러서 전송 버튼 클릭된 것처럼 처리
    }
});
