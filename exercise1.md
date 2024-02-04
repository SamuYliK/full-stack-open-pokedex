Application is coded with Python and developed by a team of six people. 

In order to ensure that the software works all the time and bugs are not pushed to running production build we need to employ principles of continuous integration / continuous delivery. With this approach changes made by one developer do not override changes made by someone else and tedious integration problems later on are avoided.

It is important to set up CI properly, here are some considerations for this. 

For linting Pylint seems to be a good option as its one of the most popular Python linters. It can also be customized, so our team can do some customization if we prefer to check some extra constraints. 

For testing it is important that the tests are not only done in a "vacuum" against the most recent changes made by developer, but in a way that it is ensured that both the whole program and the new feature work well. Tests should be done in your local version first, so you know that your feature is working properly on your machine. Then tests need to be done as well when you push your changes to ensure that we don't have infamous "works on my machine" situation, but the code works as intended with the main branch outside your local development environment. 

For building, as Python is interpreted language and does not need to be compiled, this part relates more to previously discussed testing aspect. Before adding one's changes it is important to check that the most recent version of main/production branch is used for which this new feature is added. In case someone has already updated the main branch, the local version of the code needs to be first updated to correspond to production branch. All tests need to be passed before the changes are merged to master/main/production branch. Each integration is verified by an automated build (including tests) to detect integration errors as early as possible. 

There are many alternatives for setting up your CI, some alternatives to Jenkins and GitHub Actions include following: 

| Name | Hosting |
| :---: | :-----:|
| GitLab CI | Cloud & self |
| Azure DevOps | Cloud & self |
| CircleCI | Cloud & self |
| AWS CodePipeline | Cloud hosted |
| Atlassian Bamboo | Self-hosted |

Since our team is not working with so critical information that external providers should not have any access to our code or data we can keep cloud based option on the table. 

Since GitHub Actions is trusted provider, we can assume that its use will not compromise our company's information security. On the other hand it might prove to be easier to use it since our team has only six people and we want to focus on building features and implementing self hosted CI/CD environment might be more work. 

The initial cost with managed CI/CD service might be higher, but self hosting would need more resources. The evaluation of price difference can be tricky one due to complex pricing models of hosted services. If our app succeeds and traffic increases, it might even prove to be a problem to have managed CI/CD environment as costs can increase. But due to easier initial step we decide to go with that one and evaluate the situation if our app will become really popular.
