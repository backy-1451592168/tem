<template>
  <div class="largeNetworkTopology" v-loading="loading">
    <div class="largeNetworkTopology-box card">
      <div class="action-bar card">
        <el-form :inline="true">
          <el-form-item label="账号:">
            <el-input
              style="width: 260px"
              v-model="dataParams.userId"
              placeholder="请输入账号"
              size="small"
              @blur="userIdBlur"></el-input>
          </el-form-item>
          <el-form-item label="网关SN:">
            <el-input
              style="width: 260px"
              v-model="dataParams.sn"
              placeholder="请输入网关SN"
              size="small"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="largeNetworkTopology-box-container card">
        <div class="infos">
          <div class="info-item">
            <div class="info-item-header">基础信息</div>
            <div class="info-item-content">
              <div class="info-detail">
                <div class="key">用户账号：</div>
                <div class="value">
                  {{ basicInformationData.userId ? basicInformationData.userId : '-' }}
                </div>
              </div>
              <div class="info-detail">
                <div class="key">签约带宽：</div>
                <div class="value">
                  {{ basicInformationData.bandwidth ? basicInformationData.bandwidth + 'M' : '-' }}
                </div>
              </div>
              <div class="info-detail">
                <div class="key">BRAS名称：</div>
                <div class="value">
                  {{ basicInformationData.brasName ? basicInformationData.brasName : '-' }}
                </div>
              </div>
              <div class="info-detail">
                <div class="key">BRASIP：</div>
                <div class="value">
                  {{ basicInformationData.brasIp ? basicInformationData.brasIp : '-' }}
                </div>
              </div>
              <div class="info-detail">
                <div class="key">OLTIP：</div>
                <div class="value">
                  {{ basicInformationData.oltIp ? basicInformationData.oltIp : '-' }}
                </div>
              </div>
              <div class="info-detail">
                <div class="key">PON口：</div>
                <div class="value">
                  {{ basicInformationData.oltPon ? basicInformationData.oltPon : '-' }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下阶段实现链路信息 -->
        <div class="link-information card">
          <div class="link-information-title">
            <div class="color-lump"></div>
            <div class="label">链路信息</div>
          </div>
          <div class="link-information-container">
            <div class="series" v-for="(item_p, index_p) in gplotData.nodes" :key="index_p">
              <div class="series-item" v-for="(item_c, index_c) in item_p" :key="index_c">
                <div class="series-item-title">{{ item_c.title }}</div>
                <el-tooltip
                  placement="bottom"
                  :disabled="!item_c.qcellcore || !item_c.activeUserNum">
                  <div slot="content">
                    归属: <span>{{ item_c.qcellcore }}</span>
                    <br />
                    <br />
                    活跃用户数: <span>{{ item_c.activeUserNum }}</span>
                    <br />
                    <br />
                    <span :style="{ color: item_c.lastReturnDate ? '#ec808d' : '' }">
                      本月最后一次退服日期: <span>{{ item_c.lastReturnDate }}</span>
                      &nbsp;&nbsp;
                      <span
                        v-if="item_c.lastReturnDate"
                        style="text-decoration: underline; cursor: pointer">
                        查看详情>
                      </span>
                    </span>
                    <br />
                    <br />
                    <span :style="{ color: item_c.bearingCondition !== '正常' ? '#f59a23' : '' }">
                      承载情况:
                      <span>{{ item_c.bearingCondition }}（截止{{ item_c.expirationDate }}）</span>
                      &nbsp;&nbsp;
                      <span
                        v-if="item_c.bearingCondition !== '正常' && item_c.expirationDate"
                        style="text-decoration: underline; cursor: pointer">
                        查看详情>
                      </span>
                    </span>
                  </div>
                  <img
                    class="series-item-icon"
                    :class="{
                      highlight:
                        item_c.lastReturnDate ||
                        (item_c.bearingCondition && item_c.bearingCondition !== '正常')
                    }"
                    :src=" item_c.lastReturnDate || (item_c.bearingCondition && item_c.bearingCondition !== '正常') ? 
                      topologyHighlightSvg
                      : topologySvg
                    "
                    alt="topology"
                    :id="item_c.id" />
                </el-tooltip>
                <div class="series-item-label">{{ item_c.label }}</div>
              </div>
            </div>
          </div>
          <div id="link-information-wrapper"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topologySvg from '@/assets/icons/topology.svg';
import topologyHighlightSvg from '@/assets/icons/topology-highlight.svg';
import { debounce } from '@/utils/index.js';
import LeaderLine from 'leader-line-vue';
export default {
  name: 'largeNetworkTopology',
  data() {
    return {
      topologySvg,
      topologyHighlightSvg,
      loading: false,
      dataParams: {
        userId: ''
        // sn: ''
      },
      basicInformationData: {
        userId: '',
        bandwidth: '',
        brasName: '',
        brasIp: '',
        oltIp: '',
        oltPon: ''
      },
      gplotData: {
        nodes: [
          [
            { id: 'A1', title: '152221', label: '网关1', qcellcore: '', activeUserNum: 0 },
            { id: 'A2', title: '152222', label: '网关2', qcellcore: '', activeUserNum: 0 },
            { id: 'A3', title: '152222', label: '网关3', qcellcore: '', activeUserNum: 0 }
          ],
          [
            {
              id: 'B',
              title: '1/0/3/0/5',
              label: 'PON口',
              qcellcore: '山东省济南市XX区',
              activeUserNum: 8
            }
          ],
          [
            {
              id: 'C',
              title: '10.161.120.160',
              label: 'OLT',
              qcellcore: '山东省济南市XX区',
              activeUserNum: 8,
              lastReturnDate: '2023-07-06',
              bearingCondition: '越限',
              expirationDate: '2023-07-06'
            }
          ],
          [
            {
              id: 'D1',
              title: '221.131.60.226',
              label: 'BRAS1',
              qcellcore: '山东省济南市XX区',
              activeUserNum: 8,
              lastReturnDate: '',
              // bearingCondition: '越限',
              bearingCondition: '正常',
              expirationDate: '2023-07-06'
            },
            {
              id: 'D2',
              title: '221.131.60',
              label: 'BRAS2',
              qcellcore: '山东省济南市XX区',
              activeUserNum: 8,
              lastReturnDate: '',
              bearingCondition: '正常',
              expirationDate: '2023-07-06'
            }
          ]
        ],
        links: [
          { source: 'A1', target: 'B' },
          { source: 'A2', target: 'B' },
          { source: 'A3', target: 'B' },
          { source: 'B', target: 'C' },
          { source: 'C', target: 'D1' },
          { source: 'C', target: 'D2' }
        ]
      },
      lines: []
    };
  },

  computed: {
  },

  watch: {
  },
  created() {
    this.getBasicInformation();
    this.$nextTick(() => {
      this.drawLeaderLine();
    });
    window.addEventListener('resize',
      debounce(() => {
        this.clearLeaderLine();
        setTimeout(() => {
          this.drawLeaderLine();
        }, 300);
      }, 300)
    );
  },
  methods: {
    getBasicInformation() {
      
    },
    userIdBlur() {
      if (!this.dataParams.userId) return;
      this.getBasicInformation();
    },
    clearLeaderLine() {
      let parentNode = document.getElementsByClassName('link-information')[0];
      let targetNode = document.getElementById('link-information-wrapper');
      parentNode.removeChild(targetNode);

      const newElement = document.createElement('div');
      newElement.id = 'link-information-wrapper';
      parentNode.appendChild(newElement);
    },
    drawLeaderLine() {
      let obj = {};
      let elmWrapper = document.getElementById('link-information-wrapper');
      let rectWrapper = elmWrapper.getBoundingClientRect();

      this.gplotData.links.forEach((item, index) => {
        const start = 'start' + (index + 1);
        const end = 'end' + (index + 1);
        const line = 'line' + (index + 1);
        const elmLin = 'elmLin' + (index + 1);

        obj[start] = document.getElementById(item.source);
        obj[end] = document.getElementById(item.target);

        obj[line] = LeaderLine.setLine(obj[start], obj[end]);
        obj[elmLin] = document.querySelector('.leader-line:last-of-type');

        obj[line].color = 'rgb(129, 211, 248)';
        obj[line].path = 'grid';
        obj[line].size = 3;
      });

      elmWrapper.style.transform =
        'translate(-' +
        (rectWrapper.left + pageXOffset) +
        'px, -' +
        (rectWrapper.top + pageYOffset) +
        'px)';

      this.gplotData.links.forEach((item, index) => {
        elmWrapper.appendChild(obj['elmLin' + (index + 1)]);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.largeNetworkTopology {
  padding: 10px;
  height: 100%;
  .card {
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
  }
  .largeNetworkTopology-box {
    height: 100%;

    .action-bar {
      .el-form {
        .el-form-item {
          margin-bottom: 0;
        }
      }
    }
    .largeNetworkTopology-box-container {
      height: calc(100vh - 171px);
      margin-top: 10px;
      overflow-y: auto;
      padding: 10px;
      .infos {
        .info-item {
          border: 1px solid rgb(233, 233, 233);
          border-radius: 2px 2px 0 0;
          .info-item-header {
            font-weight: bold;
            padding: 10px;
            font-size: 14px;
            background: rgba(250, 250, 250, 1);
            border-bottom: 1px solid rgb(233, 233, 233);
          }
          .info-item-content {
            display: flex;
            flex-wrap: wrap;
            .info-detail {
              min-width: calc(25% - 40px);
              line-height: 100%;
              padding: 0 10px;
              margin: 10px;
              font-size: 14px;
              color: #666;
              display: flex;
              .key {
                min-width: 70px;
              }
              .value {
              }
            }
          }
        }
      }
      .link-information {
        padding: 10px;
        margin-top: 10px;
        .link-information-title {
          display: flex;
          align-items: center;
          .color-lump {
            width: 6px;
            height: 15px;
            background: rgba(0, 0, 255, 0.65);
            display: inline-block;
            margin-right: 5px;
          }
          .label {
            font-size: 16px;
          }
        }
        .link-information-container {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          .series {
            width: calc(25% - 30px);
            margin: 0 15px;
            background-color: #ecf3f9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .series-item {
              padding: 20px 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              .series-item-title,
              .series-item-label {
                font-size: 14px;
                color: #666;
                padding: 10px;
              }
              .series-item-icon {
                width: 100px;
                height: 100px;
                padding: 20px;
                &.highlight {
                  padding: 0;
                }
              }
            }
          }
        }
        #link-information-wrapper {
          width: 0;
          height: 0;
          position: relative;
        }
      }
    }
  }
}
</style>