webpackHotUpdate_N_E("pages/index",{

/***/ "./payload/project.ts":
/*!****************************!*\
  !*** ./payload/project.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var project = {
  disable: false,
  list: [{
    title: '업무 보고 자동화 및 도메인 지식 축적 체계 구축',
    startedAt: '2026-03',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '업무 보고 프로세스 자동화',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 PPT 기반 업무 보고 및 수작업 취합 프로세스를 Notion 자동화로 전환 (대상 약 25명)'
      }, {
        content: '팀원 PPT를 개별 열어 복사·정리하던 관리자 취합 작업을 제거하고, Notion 자동 취합 + 코멘트 방식으로 개선'
      }, {
        content: 'Claude API를 활용하여 보고 초안 및 취합 초안 자동 생성 기능 구현'
      }]
    }, {
      content: '도메인 지식 축적 체계 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '축적된 업무 데이터를 기반으로 Claude API를 활용한 도메인 지식 초안 자동 생성 체계 구축'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '관리자 수작업 취합 업무 제거 — Notion 자동 취합으로 전환'
      }, {
        content: 'Claude API 연동으로 보고·취합·지식 초안 작성 자동화'
      }, {
        content: '현재 1개 팀 대상 시범 운영 중'
      }]
    }]
  }, {
    title: '롯데손해보험 고지정보 자동입력',
    startedAt: '2026-01',
    endedAt: '2026-02',
    where: '롯데손해보험',
    descriptions: [{
      content: '고지정보 자동입력 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '질병별 공통질문·추가질문으로 구성된 고지정보를 수기 입력에서 사고이력 데이터 기반 자동입력으로 전환하는 기능 개발'
      }, {
        content: '현업과 직접 커뮤니케이션하며 요구사항 정리 및 기능 반영'
      }, {
        content: '개발부터 테스트, 운영 반영까지 단독 수행'
      }]
    }, {
      content: '공통 질문 응답에 따른 추가 질문 제어 및 유효성 검증 로직 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '공통 질문 응답에 따라 추가 질문을 동적으로 제어'
      }, {
        content: '유효성 검증을 통해 알맞은 답변만 입력되도록 처리'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '자동입력 도입으로 현업 건당 입력 시간 50% 이상 단축'
      }, {
        content: '기존 잘못된 입력으로 인한 심사 반려 케이스를 유효성 검증 로직으로 차단'
      }]
    }]
  }, {
    title: 'DB생명 질병심사 기능 개선',
    startedAt: '2025-09',
    endedAt: '2025-12',
    where: 'DB생명',
    descriptions: [{
      content: '질병심사 기능 대응 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 2,400만 건 테이블에 신규 상품 데이터 4,500만 건 추가 필요 — 단일 테이블 구조의 한계를 판단하여 LIST 파티션 재설계 제안 및 적용'
      }, {
        content: '상품 코드 기반 LIST 파티션으로 분리하여, 기존 소스 및 쿼리 수정을 최소화하면서 구조 전환'
      }, {
        content: '총 6,900만 건 규모의 데이터 정합성 검증 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '6,900만 건 규모 테이블을 상품 단위로 분리하여 유지보수성 확보'
      }, {
        content: '신규 상품 추가 시 파티션 추가만으로 대응 가능한 확장 구조 확보'
      }, {
        content: '기존 쿼리 변경 없이 구조 전환 완료'
      }]
    }]
  }, {
    title: 'KB Life 질병심사 기능 개선',
    startedAt: '2025-07',
    endedAt: '2025-08',
    where: 'KB Life',
    descriptions: [{
      content: '질병심사 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '신규 건강 상품 출시에 따라 5년/10년 시나리오 판을 분리하여 질병심사 기능 개발'
      }, {
        content: '신정원 데이터 및 기존 심사 소스 분석부터 시작하여, 기존 구조를 재활용한 설계로 개발 기간 단축'
      }, {
        content: '개발부터 운영 반영까지 전 과정 단독 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '사전 도메인 지식 없이 투입되어, 소스 분석부터 운영 반영까지 2주 내 완료 — 상품 출시 일정 납기 준수'
      }]
    }]
  }, {
    title: '하나생명 제3보험 시스템 구축 (청약심사 자동화)',
    startedAt: '2024-08',
    endedAt: '2025-06',
    where: '하나생명',
    descriptions: [{
      content: '콘텐츠 배포 기능',
      weight: 'MEDIUM',
      descriptions: [{
        content: '개발계 → 테스트계 → 운영계 콘텐츠 배포 기능 설계 및 개발 (약 250만 건 규모)'
      }, {
        content: '선택적 배포, 결재, 예약 배포 기능 구현'
      }, {
        content: '단건 SELECT → 1,000건 배치 처리 전환으로 대용량 배포 성능 대폭 단축'
      }, {
        content: '솔루션 전체 콘텐츠가 한 화면에 로딩되는 구조로 인해 초기 로딩이 느린 문제를 비동기 처리로 개선'
      }]
    }, {
      content: '게시판 / 통계 화면',
      weight: 'MEDIUM',
      descriptions: [{
        content: '요구사항에 맞춰 기존 게시판 화면 커스터마이징'
      }, {
        content: '심사 결과를 각 특성에 맞게 총 6개 화면으로 구성하여 제공'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '250만 건 규모 배포를 단건 → 배치 처리로 전환하여 처리 시간 대폭 단축, DB 부하 감소'
      }, {
        content: 'DBA 의존 없이 개발팀 자체 운영 배포 가능한 체계 구축'
      }, {
        content: '4~6명 팀에서 배포 기능 전체를 단독 담당'
      }]
    }]
  }, {
    title: 'The KE 프로파일 및 장비 관리 시스템',
    startedAt: '2024-03',
    endedAt: '2024-07',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '사내 인력·장비 관리 시스템 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '이력서 수정 승인 페이지 개발'
      }, {
        content: '관리자 메뉴 개발 및 사용자 권한 관리'
      }, {
        content: '로그 관리 (AOP, Logback 활용)'
      }, {
        content: '실시간 서버 자원 모니터링'
      }, {
        content: 'Docker Compose 기반 개발/운영 환경 구축'
      }, {
        content: 'Jenkins 자동 빌드·배포 환경 구성'
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (project);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwic3RhcnRlZEF0Iiwid2hlcmUiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50Iiwid2VpZ2h0IiwiZW5kZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VDLFNBQUssRUFBRSxZQUhUO0FBSUVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZ0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQURZLEVBVVo7QUFDRUEsYUFBTyxFQUFFLGlCQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZO0FBSGhCLEtBVlksRUFpQlo7QUFDRUEsYUFBTyxFQUFFLElBRFg7QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQWpCWTtBQUpoQixHQURJLEVBaUNKO0FBQ0VKLFNBQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsUUFKVDtBQUtF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QU0sRUFBRSxNQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWSxFQUdaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSFk7QUFIaEIsS0FuQlk7QUFMaEIsR0FwSEksRUF1Sko7QUFDRUosU0FBSyxFQUFFLHlCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VLLFdBQU8sRUFBRSxTQUhYO0FBSUVKLFNBQUssRUFBRSxZQUpUO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsb0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWSxFQUlaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSlksRUFLWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUxZLEVBTVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FOWTtBQUhoQixLQURZO0FBTGhCLEdBdkpJO0FBRjBCLENBQWxDO0FBZ0xlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MjBmMjk3NmMxZjg4M2I4ZWNmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdC9JUHJvamVjdCc7XHJcblxyXG5jb25zdCBwcm9qZWN0OiBJUHJvamVjdC5QYXlsb2FkID0ge1xyXG4gIGRpc2FibGU6IGZhbHNlLFxyXG4gIGxpc3Q6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfsl4XrrLQg67O06rOgIOyekOuPme2ZlCDrsI8g64+E66mU7J24IOyngOyLnSDstpXsoIEg7LK06rOEIOq1rOy2lScsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjYtMDMnLFxyXG4gICAgICB3aGVyZTogJ+y9lOumrOyVhOyXkeyKpO2NvO2KuCjso7wpJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yXheustCDrs7Tqs6Ag7ZSE66Gc7IS47IqkIOyekOuPme2ZlCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q4sOyhtCBQUFQg6riw67CYIOyXheustCDrs7Tqs6Ag67CPIOyImOyekeyXhSDst6jtlakg7ZSE66Gc7IS47Iqk66W8IE5vdGlvbiDsnpDrj5ntmZTroZwg7KCE7ZmYICjrjIDsg4Eg7JW9IDI166qFKScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7YyA7JuQIFBQVOulvCDqsJzrs4Qg7Je07Ja0IOuzteyCrMK37KCV66as7ZWY642YIOq0gOumrOyekCDst6jtlakg7J6R7JeF7J2EIOygnOqxsO2VmOqzoCwgTm90aW9uIOyekOuPmSDst6jtlakgKyDsvZTrqZjtirgg67Cp7Iud7Jy866GcIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnQ2xhdWRlIEFQSeulvCDtmZzsmqntlZjsl6wg67O06rOgIOy0iOyViCDrsI8g7Leo7ZWpIOy0iOyViCDsnpDrj5kg7IOd7ISxIOq4sOuKpSDqtaztmIQnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+uPhOuplOyduCDsp4Dsi50g7LaV7KCBIOyytOqzhCDqtazstpUnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfstpXsoIHrkJwg7JeF66y0IOuNsOydtO2EsOulvCDquLDrsJjsnLzroZwgQ2xhdWRlIEFQSeulvCDtmZzsmqntlZwg64+E66mU7J24IOyngOyLnSDstIjslYgg7J6Q64+ZIOyDneyEsSDssrTqs4Qg6rWs7LaVJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rSA66as7J6QIOyImOyekeyXhSDst6jtlakg7JeF66y0IOygnOqxsCDigJQgTm90aW9uIOyekOuPmSDst6jtlansnLzroZwg7KCE7ZmYJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdDbGF1ZGUgQVBJIOyXsOuPmeycvOuhnCDrs7Tqs6DCt+y3qO2VqcK37KeA7IudIOy0iOyViCDsnpHshLEg7J6Q64+Z7ZmUJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftmITsnqwgMeqwnCDtjIAg64yA7IOBIOyLnOuylCDsmrTsmIEg7KSRJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfroa/rjbDshpDtlbTrs7Ttl5gg6rOg7KeA7KCV67O0IOyekOuPmeyeheugpScsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjYtMDEnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNi0wMicsXHJcbiAgICAgIHdoZXJlOiAn66Gv642w7IaQ7ZW067O07ZeYJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+qzoOyngOygleuztCDsnpDrj5nsnoXroKUg6riw64qlIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yniOuzkeuzhCDqs7XthrXsp4jrrLjCt+y2lOqwgOyniOusuOycvOuhnCDqtazshLHrkJwg6rOg7KeA7KCV67O066W8IOyImOq4sCDsnoXroKXsl5DshJwg7IKs6rOg7J2066ClIOuNsOydtO2EsCDquLDrsJgg7J6Q64+Z7J6F66Cl7Jy866GcIOyghO2ZmO2VmOuKlCDquLDriqUg6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftmITsl4Xqs7wg7KeB7KCRIOy7pOuupOuLiOy8gOydtOyFmO2VmOupsCDsmpTqtazsgqztla0g7KCV66asIOuwjyDquLDriqUg67CY7JiBJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsJzrsJzrtoDthLAg7YWM7Iqk7Yq4LCDsmrTsmIEg67CY7JiB6rmM7KeAIOuLqOuPhSDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+qzte2GtSDsp4jrrLgg7J2R64u17JeQIOuUsOuluCDstpTqsIAg7KeI66y4IOygnOyWtCDrsI8g7Jyg7Zqo7ISxIOqygOymnSDroZzsp4Eg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rO17Ya1IOyniOusuCDsnZHri7Xsl5Ag65Sw6528IOy2lOqwgCDsp4jrrLjsnYQg64+Z7KCB7Jy866GcIOygnOyWtCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Jyg7Zqo7ISxIOqygOymneydhCDthrXtlbQg7JWM66ee7J2AIOuLteuzgOunjCDsnoXroKXrkJjrj4TroZ0g7LKY66asJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7J6Q64+Z7J6F66ClIOuPhOyeheycvOuhnCDtmITsl4Ug6rG064u5IOyeheugpSDsi5zqsIQgNTAlIOydtOyDgSDri6jstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q4sOyhtCDsnpjrqrvrkJwg7J6F66Cl7Jy866GcIOyduO2VnCDsi6zsgqwg67CY66CkIOy8gOydtOyKpOulvCDsnKDtmqjshLEg6rKA7KadIOuhnOyngeycvOuhnCDssKjri6gnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0RC7IOd66qFIOyniOuzkeyLrOyCrCDquLDriqUg6rCc7ISgJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wOScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTEyJyxcclxuICAgICAgd2hlcmU6ICdEQuyDneuqhScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsp4jrs5Hsi6zsgqwg6riw64qlIOuMgOydkSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfquLDsobQgMiw0MDDrp4wg6rG0IO2FjOydtOu4lOyXkCDsi6Dqt5wg7IOB7ZKIIOuNsOydtO2EsCA0LDUwMOunjCDqsbQg7LaU6rCAIO2VhOyalCDigJQg64uo7J28IO2FjOydtOu4lCDqtazsobDsnZgg7ZWc6rOE66W8IO2MkOuLqO2VmOyXrCBMSVNUIO2MjO2LsOyFmCDsnqzshKTqs4Qg7KCc7JWIIOuwjyDsoIHsmqknIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yDge2SiCDsvZTrk5wg6riw67CYIExJU1Qg7YyM7Yuw7IWY7Jy866GcIOu2hOumrO2VmOyXrCwg6riw7KG0IOyGjOyKpCDrsI8g7L+866asIOyImOygleydhCDstZzshoztmZTtlZjrqbTshJwg6rWs7KGwIOyghO2ZmCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7LSdIDYsOTAw66eMIOqxtCDqt5zrqqjsnZgg642w7J207YSwIOygle2VqeyEsSDqsoDspp0g7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnNiw5MDDrp4wg6rG0IOq3nOuqqCDthYzsnbTruJTsnYQg7IOB7ZKIIOuLqOychOuhnCDrtoTrpqztlZjsl6wg7Jyg7KeA67O07IiY7ISxIO2ZleuztCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iug6recIOyDge2SiCDstpTqsIAg7IucIO2MjO2LsOyFmCDstpTqsIDrp4zsnLzroZwg64yA7J2RIOqwgOuKpe2VnCDtmZXsnqUg6rWs7KGwIO2ZleuztCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IOy/vOumrCDrs4Dqsr0g7JeG7J20IOq1rOyhsCDsoITtmZgg7JmE66OMJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdLQiBMaWZlIOyniOuzkeyLrOyCrCDquLDriqUg6rCc7ISgJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wNycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA4JyxcclxuICAgICAgd2hlcmU6ICdLQiBMaWZlJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iug6recIOqxtOqwlSDsg4Htkogg7Lac7Iuc7JeQIOuUsOudvCA164WELzEw64WEIOyLnOuCmOumrOyYpCDtjJDsnYQg67aE66as7ZWY7JesIOyniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6DsoJXsm5Ag642w7J207YSwIOuwjyDquLDsobQg7Ius7IKsIOyGjOyKpCDrtoTshJ3rtoDthLAg7Iuc7J6R7ZWY7JesLCDquLDsobQg6rWs7KGw66W8IOyerO2ZnOyaqe2VnCDshKTqs4TroZwg6rCc67CcIOq4sOqwhCDri6jstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qwnOuwnOu2gO2EsCDsmrTsmIEg67CY7JiB6rmM7KeAIOyghCDqs7zsoJUg64uo64+FIOyImO2WiScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yCrOyghCDrj4TrqZTsnbgg7KeA7IudIOyXhuydtCDtiKzsnoXrkJjslrQsIOyGjOyKpCDrtoTshJ3rtoDthLAg7Jq07JiBIOuwmOyYgeq5jOyngCAy7KO8IOuCtCDsmYTro4wg4oCUIOyDge2SiCDstpzsi5wg7J287KCVIOuCqeq4sCDspIDsiJgnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+2VmOuCmOyDneuqhSDsoJwz67O07ZeYIOyLnOyKpO2FnCDqtazstpUgKOyyreyVveyLrOyCrCDsnpDrj5ntmZQpJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNC0wOCcsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA2JyxcclxuICAgICAgd2hlcmU6ICftlZjrgpjsg53rqoUnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7L2Y7YWQ7LigIOuwsO2PrCDquLDriqUnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsJzrsJzqs4Qg4oaSIO2FjOyKpO2KuOqzhCDihpIg7Jq07JiB6rOEIOy9mO2FkOy4oCDrsLDtj6wg6riw64qlIOyEpOqzhCDrsI8g6rCc67CcICjslb0gMjUw66eMIOqxtCDqt5zrqqgpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfshKDtg53soIEg67Cw7Y+sLCDqsrDsnqwsIOyYiOyVvSDrsLDtj6wg6riw64qlIOq1rO2YhCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn64uo6rG0IFNFTEVDVCDihpIgMSwwMDDqsbQg67Cw7LmYIOyymOumrCDsoITtmZjsnLzroZwg64yA7Jqp65+JIOuwsO2PrCDshLHriqUg64yA7Y+tIOuLqOy2lScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7IaU66Oo7IWYIOyghOyytCDsvZjthZDsuKDqsIAg7ZWcIO2ZlOuptOyXkCDroZzrlKnrkJjripQg6rWs7KGw66GcIOyduO2VtCDstIjquLAg66Gc65Sp7J20IOuKkOumsCDrrLjsoJzrpbwg67mE64+Z6riwIOyymOumrOuhnCDqsJzshKAnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+qyjOyLnO2MkCAvIO2GteqzhCDtmZTrqbQnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsmpTqtazsgqztla3sl5Ag66ee7LawIOq4sOyhtCDqsozsi5ztjJAg7ZmU66m0IOy7pOyKpO2EsOuniOydtOynlScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Ius7IKsIOqysOqzvOulvCDqsIEg7Yq57ISx7JeQIOunnuqyjCDstJ0gNuqwnCDtmZTrqbTsnLzroZwg6rWs7ISx7ZWY7JesIOygnOqztScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJzI1MOunjCDqsbQg6rec66qoIOuwsO2PrOulvCDri6jqsbQg4oaSIOuwsOy5mCDsspjrpqzroZwg7KCE7ZmY7ZWY7JesIOyymOumrCDsi5zqsIQg64yA7Y+tIOuLqOy2lSwgREIg67aA7ZWYIOqwkOyGjCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnREJBIOydmOyhtCDsl4bsnbQg6rCc67Cc7YyAIOyekOyytCDsmrTsmIEg67Cw7Y+sIOqwgOuKpe2VnCDssrTqs4Qg6rWs7LaVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICc0fjbrqoUg7YyA7JeQ7IScIOuwsO2PrCDquLDriqUg7KCE7LK066W8IOuLqOuPhSDri7Tri7knIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1RoZSBLRSDtlITroZztjIzsnbwg67CPIOyepeu5hCDqtIDrpqwg7Iuc7Iqk7YWcJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNC0wMycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI0LTA3JyxcclxuICAgICAgd2hlcmU6ICfsvZTrpqzslYTsl5HsiqTtjbztirgo7KO8KScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgqzrgrQg7J2466ClwrfsnqXruYQg6rSA66asIOyLnOyKpO2FnCDqtazstpUnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsnbTroKXshJwg7IiY7KCVIOyKueyduCDtjpjsnbTsp4Ag6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqtIDrpqzsnpAg66mU64m0IOqwnOuwnCDrsI8g7IKs7Jqp7J6QIOq2jO2VnCDqtIDrpqwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uhnOq3uCDqtIDrpqwgKEFPUCwgTG9nYmFjayDtmZzsmqkpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6Tsi5zqsIQg7ISc67KEIOyekOybkCDrqqjri4jthLDrp4EnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0RvY2tlciBDb21wb3NlIOq4sOuwmCDqsJzrsJwv7Jq07JiBIO2ZmOqyvSDqtazstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0plbmtpbnMg7J6Q64+ZIOu5jOuTnMK367Cw7Y+sIO2ZmOqyvSDqtazshLEnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9