import echarts from 'echarts';


/** 科目饼图表 */
export function subject_pie_chart_load(data: any, name_list: string[], max_index: number) {
  const dom = document.getElementById('subject_pie_chart') as HTMLDivElement;
  if (!dom) {
    return;
  }
  const subjectChart = echarts.init( dom );
  subjectOption.legend.data = name_list;
  subjectOption.series[0].data = data;
  subjectChart.setOption(subjectOption);
  subjectChart.dispatchAction({
    type: 'highlight',
    dataIndex: max_index,
  });

  subjectChart.on('mouseover', (params: any) => {
    if (params.dataIndex !== max_index) {
      subjectChart.dispatchAction({
        type: 'downplay',
        dataIndex: max_index,
      });
    }
  });

  subjectChart.on('mouseout', (params: any) => {
    subjectChart.dispatchAction({
      type: 'downplay',
      // dataIndex: max_index,
    });
    subjectChart.dispatchAction({
      type: 'highlight',
      dataIndex: max_index,
    });
  });
}

const subjectOption: any = {
  tooltip: {
      trigger: 'item',
      formatter: '{b}</br>{c}%',
  },
  color: ['#26bf80', '#ff7200', '#ffd800', '#2692bf', '#d6d6d6', '#8fcb5f', '#cde40d', '#5e8fff', '#ff7eca', '#2bce83', '#f360fc', '#ffc000', '#8977f2'],
  legend: {
      textStyle: {
        color: '#8c8c8c',
      },
      itemWidth: 12,
      itemHeight: 9,
      orient: 'vertical',
      x: 'right',
      y: 'center',
      align: 'left',
      selectedMode: false,
      data: [],
  },
  series: [
      {
          type: 'pie',
          center : ['40%', '40%'],
          radius: ['50%', '57%'],
          avoidLabelOverlap: false,
          // hoverAnimation: false, // 鼠标移入饼图放大
          // silent: true,
          label: {
            normal: {
              position: 'center',
              show: false,
              formatter: '{b} {c}%',
              textStyle: {
                  fontSize: 14,
                  color: '#333333',
              },
            },
            emphasis: {
              show: true,
            },
          },
          labelLine: {
              show: false,
          },
          data: [],
      },
  ],
};
