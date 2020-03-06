# Getting started

1. amplify init --app https://github.com/isheejong/awskr-amplify-vue.git 을 실행하면, 
   URL 로 부터 소스코드를 로컬 디렉토리에 clone 하고 amplify init 과 amplify push 를 실행 합니다.

2. 이후 amplify console 에 접속하면, 조금전에 clone 한 애플리케이션이 생성되어 있는 것을 확인 할 수 있습니다.

3. github 에 연결하고 해당하는 repository를 연결하면 애플리케이션을 배포 할 수 있습니다.


> Samples workflow
> To set up a sample amplify project, execute the following command inside an empty directory:
   $ amplify init --app <github url>

<hr/>

## amplify 명령어 정리

1. amplify init : amplify backend 를 구성할 수 있는  cloud formation root stack 을 생성하며, 3개의 리소를 생성 합니다.
  - IAM role : 비 인증된 사용자 롤
  - IAM role : 인증된 사용자 롤
  - S3 bucket : 배포를 위한 버킷 및 프로바이더 워크 플로우에 사용됨 (프로바이더란 로컬에서 파일로 정의 백엔드 리소스를 클라우드 환경에서 생성하는 역활을 하는 도구)
  
  1) 최초 프로젝트(amplify 디렉토리가 없는 경우)
  프로바이더는 클라우드에 리소스를 생성하는 과정에서  Root Stack 과 리소스에 대해서 로그를 제공하며, 최종저으로 amplify-meta.json 파일을 생성합니다. 그리고 명령어가 실행된 디렉토리에 amplify 라는 디렉토리가 생성되며, 
  해당 디렉토리에는 백엔드 리소스에 대한 정보과 저장됩니다. Root Stack은 AWS Cloud Formation Template 로서 /amplify/backend/awscloudformation 디렉로리 생성됩니다.

  2) 이미 amplify 디렉토리가 있는 경우
  amplify 디렉토리가 이미 존재하는 경우 (Git Hub 에서 Code를 Clone 한 경우) 에는 해당 파일을 참고하여, aws-exports.js 와 같이 백엔드와 통합 할 수 있는 리소스를 생성합니다. 이 경우는 amplify 디렉토리에 백엔드에 필요한 리소스가 이미 정의가되어 있으므로, 해당 파일을 참고하여 필요한 파일을 생성합니다. 

  * 참고 GitHub 에서 Clone과 동시에 amplify backend 리소스 생성
        $ amplify init --app <github url>

         위 실행한 반드시 비어 있는 디렉토리에서 실행 되어야 하며, project-config.json 와 backend-config.json 를 포함하고 있어야 합니다. 
  amplify init 은 최초에 amplify 백엔드 리소스를 성성하거나, 또는 이미 생성이 되어 있는 경우 백엔드와 통합하는 리소스를 생성하는데 사용됩니다.


2. amplify add <category>
Once init is complete, run the command amplify add <category> to add resources of a category to the cloud. This will place a CloudFormation template for the resources of this category in the category’s subdirectory amplify/backend/<category> and insert its reference into the above-mentioned root stack as the nested child stack. When working in teams, it is good practice to run an amplify pull before modifying the backend categories.



#### 참고한 링크
>  https://read.acloud.guru/multiple-serverless-environments-with-aws-amplify-344759e1be08
>  https://aws-amplify.github.io/docs/cli-toolchain/quickstart#multiple-frontends 