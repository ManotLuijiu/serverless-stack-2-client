const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-us6dffs3seie"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://61l3miapli.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_P2JUaERrX",
    APP_CLIENT_ID: "2frstskdhccbtjt31t634b13a6",
    IDENTITY_POOL_ID: "us-east-1:acd46d04-5bf9-422a-a6b0-ef9b383391e5"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ffikgldsmnjd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sg9f7jhdhb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_5A1E73tt1",
    APP_CLIENT_ID: "son7j3jvtafm7hdk8jqp2p5k8",
    IDENTITY_POOL_ID: "us-east-1:be8384b4-2231-4950-aeea-7070abf84649"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
