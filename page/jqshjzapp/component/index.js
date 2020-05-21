
import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    ...animModal.data,
    pageName: 'component/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '/image/view.png',
          title: '政策文件',
          entitle: 'View',       
        }, {
          icon: '/image/basic.png',
          title: '办事指南',
          entitle: 'Basic Content',          
        }, {
          icon: '/image/form.png',
          title: '对象查询',
          entitle: 'Form', 
          page: 'objectquery',        
        }, {
          icon: '/image/feedback.png',
          title: '低收入家庭',
          entitle: 'Feedback',          
        }, {
          icon: '/image/navigator.png',
          title: '机构查询',
          entitle: 'Navigator',
          page: 'navigator',
        }, {
          icon: '/image/media.png',
          title: '走访记录',
          entitle: 'Media', page: 'image',
        }, {
          icon: '/image/media.png',
          title: '需求公示',
          entitle: 'Media', page: 'image',
        },{
          icon: '/image/media.png',
          title: '救助公示',
          entitle: 'Media', page: 'image',
        },        
      ],
    },
    list: [
         {
          icon: '/image/navigator.png',
          title: '导航',
          entitle: 'Navigator',
          page: 'navigator',
        },
    ]
  },
 onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      this.onChildItemTap({
        currentTarget: {
          dataset: { page: childList.page },
        },
      });
    }
  },
  onChildItemTap(e) {
    const { page } = e.currentTarget.dataset;
    dd.navigateTo({
      url: `${page}/${page}`,
    });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
