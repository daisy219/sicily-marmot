export const TITLE_ARR = {
  CODE_MODULE_BASE: '基础配置',
  CODE_MODULE_ALIAS: '配置别名',
  CODE_MODULE_USUAL: '常用命令',
  CODE_MODULE_BRANCH: '关于分支',
  CODE_MODULE_QUESTION: '常见问题',
};

export const CODE_MODULE_BASE = [
  {
    code: 'git config --list',
    notes: '查看已有的配置信息',
  },
  {
    code: 'git config --global user.name "zhaoyang"',
    notes: '配置个人的用户名称和电子邮件地址',
  },
  {
    code: 'git config --global user.email "daisyzhao219@outlook.com"',
    notes: '',
  },
];

export const CODE_MODULE_ALIAS = [
  {
    code: 'git config --global alias.st status',
  },
  {
    code: 'git config --global alias.ci commit',
  },
  {
    code: 'git config --global alias.co checkout',
  },
  {
    code: 'git config --global alias.br branch',
  },
  {
    code: 'git config --global alias.lg "log --color --graph --pretty=format:`%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset` --abbrev-commit"',
  },
];

export const CODE_MODULE_USUAL = [
  {
    code: 'git add README.md',
    notes: 'git add 命令可将该文件添加到缓存',
  },
  {
    code: 'git add -A',
  },
  {
    code: 'git add *',
    notes: '',
  },
  {
    code: 'git commit -m "第一次版本提交"',
    notes: '将缓存区内容添加到仓库中',
  },
  {
    code: 'git status',
    notes: '查看当前版本库各个文件的状态',
  },
  {
    code: 'git reset HEAD -- hello.php',
    notes: 'git reset HEAD 命令用于取消已缓存的内容',
  },
  {
    code: 'git reset --hard 版本号',
    notes: '回退版本',
  },
  {
    code: 'git tag',
    notes: '获取当前版本号',
  },
  {
    code: 'git tag 1.0.0',
    notes: '为当前版本添加版本号',
  },
  {
    code: 'git log',
    notes: '查看提交记录',
  },
];

export const CODE_MODULE_BRANCH = [
  {
    code: 'git branch branch_name',
    notes: '创建分支',
  },
  {
    code: 'git checkout branch_name',
    notes: '本地切换到这个分支',
  },
  {
    code: 'git checkout -b branch_name',
    notes: '创建并且直接切换到这个新分支',
  },
  {
    code: 'git checkout -b 本地分支名 origin/远程分支名',
    notes: '将远程git仓库里的指定分支拉取到本地（本地不存在的分支）',
  },
  {
    code: 'git push origin mybranch',
    notes: '将创建的本地分支推送到远程仓库，让其他人拉代码的时候可以看到自己创建的新分支',
  },
  {
    code: 'git checkout master',
    notes: '分支合并，比如将分支develop合并到master分支',
  },
  {
    code: 'git merge master develop',
    notes: '',
  },
  {
    code: 'git branch -d mybranch',
    notes: '删除分支',
  },
  {
    code: 'git pull origin master',
    notes: '要更新你的本地仓库至最新改动',
  },
  {
    code: 'git fetch origin',
    notes: '也可以使用fetch和rebase来进行分支的更新',
  },
  {
    code: 'git rebase origin/master',
    notes: '',
  },
  {
    code: 'git merge <branch>',
    notes: '合并其他分支到当前分支',
  },
];

export const TEXT_MODULE_QUESTION = '将本地项目弄到github上 先在github上新建仓库，然后在本地项目执行以下代码';

export const CODE_MODULE_QUESTION = [
  {
    code: 'git init',
  },
  {
    code: 'git add .',
  },
  {
    code: 'git remote add origin 上边画横线的地址(你自己的)',
  },
  {
    code: 'git commit -m "提交说明"',
  },
  {
    code: 'git pull --rebase origin master',
  },
  {
    code: 'git push origin master',
  },
  {
    code: 'git pull',
  },
];

