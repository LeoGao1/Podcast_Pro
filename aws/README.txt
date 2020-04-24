Package used:
AWSCLI (boto3) -- aws 的本地平台，需要安装和set up configuration
logging -- 登录aws
os -- loop指定path的所有文件



file:
（TODO) download_audio_from_podcast 
goal:在podcast网站上登录并下一节课的所有audio
input： podcast 对应课的网址，ucsd账户密码
output：下载一节课的audio并存到一个文件夹里

import_audio_to_s3  
goal: 把audio上传到aws 的s3 bucket
input：音频所在文件夹的path
output：create s3 bucket 并且传入audio

create_transcribe_job
goal: 使用aws transcribe并得出结果
input： course name
output: 每个结果生成一个list，点击自动下载

(TODO) create_text_in_image_job
goal: 使用aws text in image 并得出结果


Problem：
1. aws会自动生成link, 需要手动点击下载，用其他的package打开网址会forbidden，aws s3本身不能get









