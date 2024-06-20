#docker build -t kiosk-react .
# docker run -p 11434:11434 kiosk-react
# Node.js 베이스 이미지 사용
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# 환경 변수 설정 (포트 및 호스트)
ENV PORT=11434

# 필요한 시스템 패키지 설치 (예: build-essential, git 등)
# RUN apt-get update && apt-get install -y \
#     build-essential \
#     git nano
# 추가적으로 필요한 패키지들을 여기에 명시


# 프로젝트 파일 복사
COPY package*.json ./
COPY public ./public
COPY src ./src
# 의존성 설치
RUN npm install
RUN npm install react-scripts@latest
# 

#앱 실행
CMD ["npm", "start"]

# 포트 노출 (선택 사항)
EXPOSE 11434


