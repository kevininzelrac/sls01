# AWS Serverless Architecture 101

## Frontend

- Vite / React App
- AWS S3 Bucket

### Bucket Policy

```sh
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:ListBucket",
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::bucketName",
                "arn:aws:s3:::bucketName/*"
            ]
        }
    ]
}
```

### Static Web Hosting enabled and Redirection rule for api Gateway

```sh
[
    {
        "Condition": {
            "KeyPrefixEquals": "api/"
        },
        "Redirect": {
            "Protocol": "https",
            "HostName": "myApiAdress.amazonaws...",
            "ReplaceKeyPrefixWith": "prod/api/"
        }
    }
]
```

## Backend

- Express App
- AWS Lambda Function
- REST API Gateway Trigger

## Deploy

- Github Actions YAML file
- env variables into Settings > Secrets and Variables > Actions > Repository secrets
