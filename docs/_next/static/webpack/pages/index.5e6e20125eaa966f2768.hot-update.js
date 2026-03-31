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
        content: '1개 팀 대상 테스트 예정'
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
        content: '데이터 적재 전 중복·정합성 검증 수행'
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
        content: '현업 커뮤니케이션 지원을 받으며, 개발부터 운영 반영까지 수행'
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
        content: 'DBA 의존 없이 현업이 직접 배포할 수 있는 체계 구축'
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
        content: '이력서 수정 승인, 관리자 메뉴, 사용자 권한 관리, 로그 관리(AOP, Logback) 개발'
      }, {
        content: '실시간 서버 자원 모니터링 기능 구현'
      }, {
        content: 'Docker Compose + Jenkins 기반 빌드·배포 환경을 주도하여 구축'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwic3RhcnRlZEF0Iiwid2hlcmUiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50Iiwid2VpZ2h0IiwiZW5kZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VDLFNBQUssRUFBRSxZQUhUO0FBSUVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZ0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQ0VDLGVBQU8sRUFDTDtBQUZKLE9BRFksRUFLWjtBQUNFQSxlQUFPLEVBQ0w7QUFGSixPQUxZLEVBU1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FUWTtBQUhoQixLQURZLEVBZ0JaO0FBQ0VBLGFBQU8sRUFBRSxpQkFEWDtBQUVFQyxZQUFNLEVBQUUsUUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFDRUMsZUFBTyxFQUNMO0FBRkosT0FEWTtBQUhoQixLQWhCWSxFQTBCWjtBQUNFQSxhQUFPLEVBQUUsSUFEWDtBQUVFQyxZQUFNLEVBQUUsTUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlksRUFHWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUhZO0FBSGhCLEtBMUJZO0FBSmhCLEdBREksRUEwQ0o7QUFDRUosU0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VLLFdBQU8sRUFBRSxTQUhYO0FBSUVKLFNBQUssRUFBRSxRQUpUO0FB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QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQ0VDLGVBQU8sRUFDTDtBQUZKLE9BRFksRUFLWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUxZO0FBSGhCLEtBekJZO0FBTGhCLEdBL0lJLEVBMExKO0FBQ0VKLFNBQUssRUFBRSx5QkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsWUFKVDtBQUtFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUFFLG9CQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUNFQyxlQUFPLEVBQ0w7QUFGSixPQURZLEVBS1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FMWSxFQU1aO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BTlk7QUFIaEIsS0FEWTtBQUxoQixHQTFMSTtBQUYwQixDQUFsQztBQW1OZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWU2ZTIwMTI1ZWFhOTY2ZjI3NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm9qZWN0IH0gZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3QvSVByb2plY3QnO1xyXG5cclxuY29uc3QgcHJvamVjdDogSVByb2plY3QuUGF5bG9hZCA9IHtcclxuICBkaXNhYmxlOiBmYWxzZSxcclxuICBsaXN0OiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7JeF66y0IOuztOqzoCDsnpDrj5ntmZQg67CPIOuPhOuplOyduCDsp4Dsi50g7LaV7KCBIOyytOqzhCDqtazstpUnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI2LTAzJyxcclxuICAgICAgd2hlcmU6ICfsvZTrpqzslYTsl5HsiqTtjbztirgo7KO8KScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsl4XrrLQg67O06rOgIO2UhOuhnOyEuOyKpCDsnpDrj5ntmZQnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICfquLDsobQgUFBUIOq4sOuwmCDsl4XrrLQg67O06rOgIOuwjyDsiJjsnpHsl4Ug7Leo7ZWpIO2UhOuhnOyEuOyKpOulvCBOb3Rpb24g7J6Q64+Z7ZmU66GcIOyghO2ZmCAo64yA7IOBIOyVvSAyNeuqhSknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICftjIDsm5AgUFBU66W8IOqwnOuzhCDsl7TslrQg67O17IKswrfsoJXrpqztlZjrjZgg6rSA66as7J6QIOy3qO2VqSDsnpHsl4XsnYQg7KCc6rGw7ZWY6rOgLCBOb3Rpb24g7J6Q64+ZIOy3qO2VqSArIOy9lOupmO2KuCDrsKnsi53snLzroZwg6rCc7ISgJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnQ2xhdWRlIEFQSeulvCDtmZzsmqntlZjsl6wg67O06rOgIOy0iOyViCDrsI8g7Leo7ZWpIOy0iOyViCDsnpDrj5kg7IOd7ISxIOq4sOuKpSDqtaztmIQnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+uPhOuplOyduCDsp4Dsi50g7LaV7KCBIOyytOqzhCDqtazstpUnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICfstpXsoIHrkJwg7JeF66y0IOuNsOydtO2EsOulvCDquLDrsJjsnLzroZwgQ2xhdWRlIEFQSeulvCDtmZzsmqntlZwg64+E66mU7J24IOyngOyLnSDstIjslYgg7J6Q64+ZIOyDneyEsSDssrTqs4Qg6rWs7LaVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q0gOumrOyekCDsiJjsnpHsl4Ug7Leo7ZWpIOyXheustCDsoJzqsbAg4oCUIE5vdGlvbiDsnpDrj5kg7Leo7ZWp7Jy866GcIOyghO2ZmCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnQ2xhdWRlIEFQSSDsl7Drj5nsnLzroZwg67O06rOgwrfst6jtlanCt+yngOyLnSDstIjslYgg7J6R7ISxIOyekOuPme2ZlCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnMeqwnCDtjIAg64yA7IOBIO2FjOyKpO2KuCDsmIjsoJUnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+uhr+uNsOyGkO2VtOuztO2XmCDqs6Dsp4DsoJXrs7Qg7J6Q64+Z7J6F66ClJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNi0wMScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI2LTAyJyxcclxuICAgICAgd2hlcmU6ICfroa/rjbDshpDtlbTrs7Ttl5gnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn6rOg7KeA7KCV67O0IOyekOuPmeyeheugpSDquLDriqUg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAn7KeI67OR67OEIOqzte2GteyniOusuMK37LaU6rCA7KeI66y47Jy866GcIOq1rOyEseuQnCDqs6Dsp4DsoJXrs7Trpbwg7IiY6riwIOyeheugpeyXkOyEnCDsgqzqs6DsnbTroKUg642w7J207YSwIOq4sOuwmCDsnpDrj5nsnoXroKXsnLzroZwg7KCE7ZmY7ZWY64qUIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftmITsl4Xqs7wg7KeB7KCRIOy7pOuupOuLiOy8gOydtOyFmO2VmOupsCDsmpTqtazsgqztla0g7KCV66asIOuwjyDquLDriqUg67CY7JiBJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsJzrsJzrtoDthLAg7YWM7Iqk7Yq4LCDsmrTsmIEg67CY7JiB6rmM7KeAIOuLqOuPhSDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+qzte2GtSDsp4jrrLgg7J2R64u17JeQIOuUsOuluCDstpTqsIAg7KeI66y4IOygnOyWtCDrsI8g7Jyg7Zqo7ISxIOqygOymnSDroZzsp4Eg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rO17Ya1IOyniOusuCDsnZHri7Xsl5Ag65Sw6528IOy2lOqwgCDsp4jrrLjsnYQg64+Z7KCB7Jy866GcIOygnOyWtCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Jyg7Zqo7ISxIOqygOymneydhCDthrXtlbQg7JWM66ee7J2AIOuLteuzgOunjCDsnoXroKXrkJjrj4TroZ0g7LKY66asJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7J6Q64+Z7J6F66ClIOuPhOyeheycvOuhnCDtmITsl4Ug6rG064u5IOyeheugpSDsi5zqsIQgNTAlIOydtOyDgSDri6jstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q4sOyhtCDsnpjrqrvrkJwg7J6F66Cl7Jy866GcIOyduO2VnCDsi6zsgqwg67CY66CkIOy8gOydtOyKpOulvCDsnKDtmqjshLEg6rKA7KadIOuhnOyngeycvOuhnCDssKjri6gnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0RC7IOd66qFIOyniOuzkeyLrOyCrCDquLDriqUg6rCc7ISgJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wOScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTEyJyxcclxuICAgICAgd2hlcmU6ICdEQuyDneuqhScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsp4jrs5Hsi6zsgqwg6riw64qlIOuMgOydkSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICfquLDsobQgMiw0MDDrp4wg6rG0IO2FjOydtOu4lOyXkCDsi6Dqt5wg7IOB7ZKIIOuNsOydtO2EsCA0LDUwMOunjCDqsbQg7LaU6rCAIO2VhOyalCDigJQg64uo7J28IO2FjOydtOu4lCDqtazsobDsnZgg7ZWc6rOE66W8IO2MkOuLqO2VmOyXrCBMSVNUIO2MjO2LsOyFmCDsnqzshKTqs4Qg7KCc7JWIIOuwjyDsoIHsmqknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICfsg4Htkogg7L2U65OcIOq4sOuwmCBMSVNUIO2MjO2LsOyFmOycvOuhnCDrtoTrpqztlZjsl6wsIOq4sOyhtCDshozsiqQg67CPIOy/vOumrCDsiJjsoJXsnYQg7LWc7IaM7ZmU7ZWY66m07IScIOq1rOyhsCDsoITtmZgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfrjbDsnbTthLAg7KCB7J6sIOyghCDspJHrs7XCt+ygle2VqeyEsSDqsoDspp0g7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnNiw5MDDrp4wg6rG0IOq3nOuqqCDthYzsnbTruJTsnYQg7IOB7ZKIIOuLqOychOuhnCDrtoTrpqztlZjsl6wg7Jyg7KeA67O07IiY7ISxIO2ZleuztCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iug6recIOyDge2SiCDstpTqsIAg7IucIO2MjO2LsOyFmCDstpTqsIDrp4zsnLzroZwg64yA7J2RIOqwgOuKpe2VnCDtmZXsnqUg6rWs7KGwIO2ZleuztCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IOy/vOumrCDrs4Dqsr0g7JeG7J20IOq1rOyhsCDsoITtmZgg7JmE66OMJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdLQiBMaWZlIOyniOuzkeyLrOyCrCDquLDriqUg6rCc7ISgJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wNycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA4JyxcclxuICAgICAgd2hlcmU6ICdLQiBMaWZlJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAn7Iug6recIOqxtOqwlSDsg4Htkogg7Lac7Iuc7JeQIOuUsOudvCA164WELzEw64WEIOyLnOuCmOumrOyYpCDtjJDsnYQg67aE66as7ZWY7JesIOyniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAn7Iug7KCV7JuQIOuNsOydtO2EsCDrsI8g6riw7KG0IOyLrOyCrCDshozsiqQg67aE7ISd67aA7YSwIOyLnOyeke2VmOyXrCwg6riw7KG0IOq1rOyhsOulvCDsnqztmZzsmqntlZwg7ISk6rOE66GcIOqwnOuwnCDquLDqsIQg64uo7LaVJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZiE7JeFIOy7pOuupOuLiOy8gOydtOyFmCDsp4Dsm5DsnYQg67Cb7Jy866mwLCDqsJzrsJzrtoDthLAg7Jq07JiBIOuwmOyYgeq5jOyngCDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICfsgqzsoIQg64+E66mU7J24IOyngOyLnSDsl4bsnbQg7Yis7J6F65CY7Ja0LCDshozsiqQg67aE7ISd67aA7YSwIOyatOyYgSDrsJjsmIHquYzsp4AgMuyjvCDrgrQg7JmE66OMIOKAlCDsg4Htkogg7Lac7IucIOydvOyglSDrgqnquLAg7KSA7IiYJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7ZWY64KY7IOd66qFIOygnDPrs7Ttl5gg7Iuc7Iqk7YWcIOq1rOy2lSAo7LKt7JW97Ius7IKsIOyekOuPme2ZlCknLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI0LTA4JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMDYnLFxyXG4gICAgICB3aGVyZTogJ+2VmOuCmOyDneuqhScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsvZjthZDsuKAg67Cw7Y+sIOq4sOuKpScsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICAgJ+qwnOuwnOqzhCDihpIg7YWM7Iqk7Yq46rOEIOKGkiDsmrTsmIHqs4Qg7L2Y7YWQ7LigIOuwsO2PrCDquLDriqUg7ISk6rOEIOuwjyDqsJzrsJwgKOyVvSAyNTDrp4wg6rG0IOq3nOuqqCknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfshKDtg53soIEg67Cw7Y+sLCDqsrDsnqwsIOyYiOyVvSDrsLDtj6wg6riw64qlIOq1rO2YhCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn64uo6rG0IFNFTEVDVCDihpIgMSwwMDDqsbQg67Cw7LmYIOyymOumrCDsoITtmZjsnLzroZwg64yA7Jqp65+JIOuwsO2PrCDshLHriqUg64yA7Y+tIOuLqOy2lScgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAn7IaU66Oo7IWYIOyghOyytCDsvZjthZDsuKDqsIAg7ZWcIO2ZlOuptOyXkCDroZzrlKnrkJjripQg6rWs7KGw66GcIOyduO2VtCDstIjquLAg66Gc65Sp7J20IOuKkOumsCDrrLjsoJzrpbwg67mE64+Z6riwIOyymOumrOuhnCDqsJzshKAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqsozsi5ztjJAgLyDthrXqs4Qg7ZmU66m0JyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7JqU6rWs7IKs7ZWt7JeQIOunnuy2sCDquLDsobQg6rKM7Iuc7YyQIO2ZlOuptCDsu6TsiqTthLDrp4jsnbTsp5UnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLrOyCrCDqsrDqs7zrpbwg6rCBIO2KueyEseyXkCDrp57qsowg7LSdIDbqsJwg7ZmU66m07Jy866GcIOq1rOyEse2VmOyXrCDsoJzqs7UnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICcyNTDrp4wg6rG0IOq3nOuqqCDrsLDtj6zrpbwg64uo6rG0IOKGkiDrsLDsuZgg7LKY66as66GcIOyghO2ZmO2VmOyXrCDsspjrpqwg7Iuc6rCEIOuMgO2PrSDri6jstpUsIERCIOu2gO2VmCDqsJDshownLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdEQkEg7J2Y7KG0IOyXhuydtCDtmITsl4XsnbQg7KeB7KCRIOuwsO2PrO2VoCDsiJgg7J6I64qUIOyytOqzhCDqtazstpUnIH0sXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdUaGUgS0Ug7ZSE66Gc7YyM7J28IOuwjyDsnqXruYQg6rSA66asIOyLnOyKpO2FnCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjQtMDMnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNC0wNycsXHJcbiAgICAgIHdoZXJlOiAn7L2U66as7JWE7JeR7Iqk7Y287Yq4KOyjvCknLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7IKs64K0IOyduOugpcK37J6l67mEIOq0gOumrCDsi5zsiqTthZwg6rWs7LaVJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAn7J2066Cl7IScIOyImOyglSDsirnsnbgsIOq0gOumrOyekCDrqZTribQsIOyCrOyaqeyekCDqtoztlZwg6rSA66asLCDroZzqt7gg6rSA66asKEFPUCwgTG9nYmFjaykg6rCc67CcJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iuk7Iuc6rCEIOyEnOuyhCDsnpDsm5Ag66qo64uI7YSw66eBIOq4sOuKpSDqtaztmIQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0RvY2tlciBDb21wb3NlICsgSmVua2lucyDquLDrsJgg67mM65OcwrfrsLDtj6wg7ZmY6rK97J2EIOyjvOuPhO2VmOyXrCDqtazstpUnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9