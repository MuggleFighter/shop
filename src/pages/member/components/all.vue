<template>

    <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" >
      <div class="block-item js-address-item address-item "  v-for="address in list" :key="address.id">
        <!-- <router-link class="block-item js-address-item address-item " :to="{name:'form',params:{type:'edit',instance:JSON.stringify(address)}}" v-for="address in list" :key="address.id"> -->
        <div class="address-title">{{address.name}} {{address.tel}}</div>
        <p>{{address.province}}{{address.cityName}}{{address.districtName}}{{address.address}}</p>
        <router-link href="" class="address-edit" :to="{name:'form',query:{type:'edit',instance:JSON.stringify(address)}}">修改</router-link>
      </div>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{name:'form',query:{type:'add'}}" >
            新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
import Address from "js/Address";
export default {
  data() {
    return {
      list: null
    };
  },
  methods: {
    getAddressList() {
      Address.list().then(data => {
        this.list = data.list;
      });
    }
  },
  created() {
    this.getAddressList();
  }
};
</script>
