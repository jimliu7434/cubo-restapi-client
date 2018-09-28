# cubo-restapi-client

  Testing tool for [CUBO restful API](https://github.com/jimliu7434/cubo-restapi)

### Features

  1. 動態產生指定數量的 Client
  2. 每個 Client 第一次 Heartbeat 時間不固定 (0~60 sec)
  3. 每個 Clinet 定期發送 Heartbeat

### Configuration

  透過設定 [conf.js](./conf.js) 進行設置

  ```js
  {
    api: 'http://127.0.0.1:80/heartbeat/',  // cubo rest api
    intervalMin: 1,                         // heartbeat interval in MINUTE
    clients: 3000,                          // clients to create
  }
  ```