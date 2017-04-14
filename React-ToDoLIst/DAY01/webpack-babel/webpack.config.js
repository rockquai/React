//----- webpack.config.js -----
module.exports = {
  devtool: 'eval',                    // 개발용 디버깅 기능
  entry: './main.js',                 // 진입파일
  output: {                           // 결과파일
    'path': __dirname + '/dist/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [                        // 모듈별 핸들링 정의
      {
        test: /\.js$/,                // 정규표현식(조건 설정)
        exclude: [ /node_modules/ ],  // 제외할 경로
        include: [ /src/ ],           // 포함할 경로
        loader: 'babel-loader'        // 적용할 로더
      }
    ]
  }
}