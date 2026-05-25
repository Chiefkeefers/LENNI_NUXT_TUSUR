<template>
  <div class="app-socials">
    <a href="#" rel="nofollow noreferrer noopener" class="app-socials__link">
      <SvgIcon
        class="app-socials__icon"
        name="insta"
        width="58"
        height="58"
      />
    </a>
    <a href="#" class="app-socials__link">
      <SvgIcon 
      class="app-socials__icon" 
      name="soc_vk" 
      width="58" 
      height="58" />
    </a>
  </div>
</template>

<style lang="less">
  .app-socials {
    display: flex;
    align-items: center;
    &__link {
      flex-shrink: 0;
      margin-right: 44px;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      color: @black;
      font-size: 0;
      text-decoration: none;
      transition: color 0.2s;
      &:active {
        color: @red;
      }
      &:hover {
        @media (hover: hover) {
          color: @red;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__icon {
      width: 100%;
      height: 100%;
    }
  }
</style>