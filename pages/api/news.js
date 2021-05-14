// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
    res.json({
      code: 200,
      data: [
        {
        title:"美国将放弃新冠疫苗知识产权专利",
        amount:"485万",
        },
        {
          title:"世卫称印度疫情向周边扩散",
          amount:"468万",
          },
          {
            title:"五一假期人均出游4.18天",
            amount:"452万",
            },
            {
              title:"31省区市新增5例均为境外输入",
              amount:"436万",
              },
              {
                title:"铁路部门回应外籍旅客乘车未戴口罩",
                amount:"411万",
                },
                {
                  title:"盖茨将18亿美元股票转给梅琳达",
                  amount:"406万",
                  },
                  {
                    title:"陈妍希谈和陈晓的夫妻相处之道",
                    amount:"392万",
                    },
                    {
                      title:"全球1.56亿人面临重度粮食不安全",
                      amount:"378万",
                      },
                      {
                        title:"今年将发放1000万张职业培训券",
                        amount:"365万",
                        },
                        {
                          title:"宁德时代曾毓群成香港首富",
                          amount:"352万",
                          },
      ]
      }
    )
}