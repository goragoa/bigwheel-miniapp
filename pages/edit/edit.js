Page({
  data: {
    slicePrizes: [
      { text: "恭喜中了大奖", img: "assets/gift.png", weight: 1 },
      { text: "50 积分", img: "assets/gift.png", weight: 2 },
      { text: "500 积分", img: "assets/gift.png", weight: 1 },
      { text: "谢谢参与", img: "assets/gift.png", weight: 5 },
      { text: "200 积分", img: "assets/gift.png", weight: 2 },
      { text: "100 积分", img: "assets/gift.png", weight: 2 },
      { text: "150 积分", img: "assets/gift.png", weight: 2 },
      { text: "谢谢参与", img: "assets/gift.png", weight: 5 }
    ]
  },

  onLoad() {
    // 可以在这里从缓存或者其他地方加载之前的设置
    const slicePrizes = wx.getStorageSync('slicePrizes') || this.data.slicePrizes;
    this.setData({
      slicePrizes
    });
  },

  onOptionInput(e) {
    const index = e.currentTarget.dataset.index;
    const value = e.detail.value;
    const slicePrizes = this.data.slicePrizes;
    slicePrizes[index].text = value;
    this.setData({
      slicePrizes
    });
  },

  onImageInput(e) {
    const index = e.currentTarget.dataset.index;
    const value = e.detail.value;
    const slicePrizes = this.data.slicePrizes;
    slicePrizes[index].img = value;
    this.setData({
      slicePrizes
    });
  },

  onWeightInput(e) {
    const index = e.currentTarget.dataset.index;
    const value = parseInt(e.detail.value) || 1;
    const slicePrizes = this.data.slicePrizes;
    slicePrizes[index].weight = value;
    this.setData({
      slicePrizes
    });
  },

  addOption() {
    const slicePrizes = this.data.slicePrizes;
    slicePrizes.push({ text: "", img: "", weight: 1 });
    this.setData({
      slicePrizes
    });
  },

  removeOption() {
    const slicePrizes = this.data.slicePrizes;
    if (slicePrizes.length > 0) {
      slicePrizes.pop();
      this.setData({
        slicePrizes
      });
    }
  },

  saveSettings() {
    const { slicePrizes } = this.data;
    wx.setStorageSync('slicePrizes', slicePrizes);
    wx.navigateBack({
      delta: 1
    });
  }
});