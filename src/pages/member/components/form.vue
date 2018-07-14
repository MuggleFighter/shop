<template>
    <div class="container " style="min-height: 597px;">
    <div class="section section-first">
      <div class="block form js-form">
        <input class="js-id" name="id" type="hidden" value="">
        <div class="block-item" style="border-top:0;">
          <label>收货人</label>
          <input type="text" placeholder="请输入姓名" name="user_name" v-model.trim="name" maxlength="20" @input="verifyName">
        </div>
        <div class="block-item">
          <label>联系电话</label>
          <input type="tel" placeholder="联系电话" name="tel" v-model="tel" maxlength="11" @input="verifyTel">
        </div>
        <div class="block-item">
          <label>选择地区</label>
          <div class="select-group">
            <select class="js-province-selector" v-model="provinceValue" @change="verifyAddress">
              <option :value="-1" disabled>选择省份</option>
              <option v-for="province in addressData.list" :key="province.value" :value="province.value">{{province.label}}</option>
            </select>
            <select class="js-city-selector" v-model="cityValue"  @change="verifyAddress" >
              <option :value="-1" disabled>选择城市</option>
              <option v-for="city in cityList" :key="city.value" :value="city.value">{{city.label}}</option>
            </select>
            <select class="js-county-selector" name="area_code" v-model="districtValue"  @change="verifyAddress">
              <option :value="-1" disabled>选择地区</option>
              <option v-for="district in districtList" :key="district.value" :value="district.value">{{district.label}}</option>
            </select>
          </div>
        </div>
        <div class="block-item">
          <label>详细地址</label>
          <input type="text" placeholder="街道门牌信息"  v-model.trim="address" maxlength="100" @input="verifyAddress">
        </div>
      </div>
    </div>
    <p class="err-msg" style="color:red;line-height:20px;" v-for="err in errMsgs" :key="err">{{err}}</p>
    <div class="block section js-save block-control-btn" @click="add">
      <div class="block-item c-blue center">保存</div>
    </div>
    <div class="block section js-delete block-control-btn" v-if="type === 'edit'" @click="remove">
      <div class="block-item c-red center">删除</div>
    </div>
    <div class="block stick-bottom-row center js-save-default" v-if="type === 'edit'" @click="setDefault">
      <button class="btn btn-standard js-save-default-btn">设为默认收货地址</button>
    </div>
  </div>
</template>

<script>
import addressData from "js/address.json";
import Address from "js/Address";
export default {
  data() {
    return {
      name: "",
      tel: "",
      provinceValue: -1,
      cityValue: -1,
      districtValue: -1,
      address: "",
      id: -1,
      type: "",
      instance: null,
      addressData,
      errMsgs: [],
      isCitychanged: false,
      isDistrictChanged: false
    };
  },
  created() {
    const query = this.$route.query;
    this.type = query.type;
    this.instance = JSON.parse(query.instance);

    if (this.type === "edit") {
      const instance = this.instance;
      this.provinceValue = instance.provinceValue;
      // this.cityValue = instance.cityValue;
      // this.districtValue = instance.districtValue;
      this.name = instance.name;
      this.tel = instance.tel;
      this.address = instance.address;
      this.id = instance.id;
    }
  },
  computed: {
    cityList() {
      if (this.provinceValue === -1) return [];
      const list = this.addressData.list;
      const index = list.findIndex(province => {
        return province.value === this.provinceValue;
      });
      this.cityValue = -1;
      this.districtValue = -1;
      if (this.type === "edit" && !this.isCitychanged) {
        this.cityValue = this.instance.cityValue;
        this.isCitychanged = true;
      }
      return list[index].children;
    },
    districtList() {
      if (this.cityValue === -1) return [];
      const list = this.cityList;
      const index = list.findIndex(city => {
        return city.value === this.cityValue;
      });
      this.districtValue = -1;
      if (this.type === "edit" && !this.isDistrictChanged) {
        this.districtValue = this.instance.districtValue;
        this.isDistrictChanged = true;
      }
      return list[index].children;
    }
  },
  methods: {
    add() {
      this.verifyName();
      this.verifyTel();
      this.verifyAddress();
      if (this.errMsgs.length !== 0) return;
      const {
        name,
        tel,
        address,
        provinceValue,
        cityValue,
        districtValue
      } = this;
      const addressData = {
        name,
        tel,
        address,
        provinceValue,
        cityValue,
        districtValue
      };
      if (this.type === "add") {
        Address.add(addressData).then(data => {
          this.$router.go(-1);
        });
      }
      if (this.type === "edit") {
        addressData.id = this.id;
        Address.update(addressData).then(() => {
          this.$router.go(-1);
        });
      }
    },
    verifyName() {
      const err = "请输入正确的姓名";
      const index = this.errMsgs.indexOf(err);
      if (!/^[\u4e00-\u9fa5]{2,}(·[\u4e00-\u9fa5]+)*$/.test(this.name)) {
        if (index !== -1) return;
        this.errMsgs.push(err);
      } else if (index !== -1) {
        this.errMsgs.splice(index, 1);
      }
    },
    verifyTel() {
      const err = "请输入正确的电话号码";
      const index = this.errMsgs.indexOf(err);
      if (!/^(((13|14|15|18|17)\d{9}))$/.test(this.tel)) {
        if (index !== -1) return;
        this.errMsgs.push(err);
      } else if (index !== -1) {
        this.errMsgs.splice(index, 1);
      }
    },
    verifyAddress() {
      const err = "请输入正确的地址";
      const index = this.errMsgs.indexOf(err);
      if (
        this.provinceValue === -1 ||
        this.cityValue === -1 ||
        this.districtValue === -1 ||
        !this.address
      ) {
        if (index !== -1) return;
        this.errMsgs.push(err);
      } else if (index !== -1) {
        this.errMsgs.splice(index, 1);
      }
    },
    remove() {
      if (window.confirm("确认删除?")) {
        Address.remove(this.id).then(() => {
          this.$router.go(-1);
        });
      }
    },
    setDefault() {
      Address.setDefault(this.id).then(() => {
        this.$router.go(-1);
      });
    }
  }
};
</script>
