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
        content: 'DBA 의존 없이 개발팀 자체 운영 배포 가능한 체계 구축'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwic3RhcnRlZEF0Iiwid2hlcmUiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50Iiwid2VpZ2h0IiwiZW5kZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VDLFNBQUssRUFBRSxZQUhUO0FBSUVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZ0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQURZLEVBVVo7QUFDRUEsYUFBTyxFQUFFLGlCQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZO0FBSGhCLEtBVlksRUFpQlo7QUFDRUEsYUFBTyxFQUFFLElBRFg7QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQWpCWTtBQUpoQixHQURJLEVBaUNKO0FBQ0VKLFNBQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsUUFKVDtBQUtF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QU0sRUFBRSxNQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWTtBQUhoQixLQW5CWTtBQUxoQixHQXBISSxFQXNKSjtBQUNFSixTQUFLLEVBQUUseUJBRFQ7QUFFRUMsYUFBUyxFQUFFLFNBRmI7QUFHRUssV0FBTyxFQUFFLFNBSFg7QUFJRUosU0FBSyxFQUFFLFlBSlQ7QUFLRUMsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLGFBQU8sRUFBRSxvQkFEWDtBQUVFQyxZQUFNLEVBQUUsUUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlksRUFHWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUhZO0FBSGhCLEtBRFk7QUFMaEIsR0F0Skk7QUFGMEIsQ0FBbEM7QUE0S2VQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlNDM4ZWY4M2IwMWZiZTMwMDg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJvamVjdCB9IGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0L0lQcm9qZWN0JztcclxuXHJcbmNvbnN0IHByb2plY3Q6IElQcm9qZWN0LlBheWxvYWQgPSB7XHJcbiAgZGlzYWJsZTogZmFsc2UsXHJcbiAgbGlzdDogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+yXheustCDrs7Tqs6Ag7J6Q64+Z7ZmUIOuwjyDrj4TrqZTsnbgg7KeA7IudIOy2leyggSDssrTqs4Qg6rWs7LaVJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNi0wMycsXHJcbiAgICAgIHdoZXJlOiAn7L2U66as7JWE7JeR7Iqk7Y287Yq4KOyjvCknLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7JeF66y0IOuztOqzoCDtlITroZzshLjsiqQg7J6Q64+Z7ZmUJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IFBQVCDquLDrsJgg7JeF66y0IOuztOqzoCDrsI8g7IiY7J6R7JeFIOy3qO2VqSDtlITroZzshLjsiqTrpbwgTm90aW9uIOyekOuPme2ZlOuhnCDsoITtmZggKOuMgOyDgSDslb0gMjXrqoUpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftjIDsm5AgUFBU66W8IOqwnOuzhCDsl7TslrQg67O17IKswrfsoJXrpqztlZjrjZgg6rSA66as7J6QIOy3qO2VqSDsnpHsl4XsnYQg7KCc6rGw7ZWY6rOgLCBOb3Rpb24g7J6Q64+ZIOy3qO2VqSArIOy9lOupmO2KuCDrsKnsi53snLzroZwg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdDbGF1ZGUgQVBJ66W8IO2ZnOyaqe2VmOyXrCDrs7Tqs6Ag7LSI7JWIIOuwjyDst6jtlakg7LSI7JWIIOyekOuPmSDsg53shLEg6riw64qlIOq1rO2YhCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn64+E66mU7J24IOyngOyLnSDstpXsoIEg7LK06rOEIOq1rOy2lScsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+y2leyggeuQnCDsl4XrrLQg642w7J207YSw66W8IOq4sOuwmOycvOuhnCBDbGF1ZGUgQVBJ66W8IO2ZnOyaqe2VnCDrj4TrqZTsnbgg7KeA7IudIOy0iOyViCDsnpDrj5kg7IOd7ISxIOyytOqzhCDqtazstpUnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqtIDrpqzsnpAg7IiY7J6R7JeFIOy3qO2VqSDsl4XrrLQg7KCc6rGwIOKAlCBOb3Rpb24g7J6Q64+ZIOy3qO2VqeycvOuhnCDsoITtmZgnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0NsYXVkZSBBUEkg7Jew64+Z7Jy866GcIOuztOqzoMK37Leo7ZWpwrfsp4Dsi50g7LSI7JWIIOyekeyEsSDsnpDrj5ntmZQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJzHqsJwg7YyAIOuMgOyDgSDthYzsiqTtirgg7JiI7KCVJyB9LFxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn66Gv642w7IaQ7ZW067O07ZeYIOqzoOyngOygleuztCDsnpDrj5nsnoXroKUnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI2LTAxJyxcclxuICAgICAgZW5kZWRBdDogJzIwMjYtMDInLFxyXG4gICAgICB3aGVyZTogJ+uhr+uNsOyGkO2VtOuztO2XmCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqs6Dsp4DsoJXrs7Qg7J6Q64+Z7J6F66ClIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsp4jrs5Hrs4Qg6rO17Ya17KeI66y4wrfstpTqsIDsp4jrrLjsnLzroZwg6rWs7ISx65CcIOqzoOyngOygleuztOulvCDsiJjquLAg7J6F66Cl7JeQ7IScIOyCrOqzoOydtOugpSDrjbDsnbTthLAg6riw67CYIOyekOuPmeyeheugpeycvOuhnCDsoITtmZjtlZjripQg6riw64qlIOqwnOuwnCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZiE7JeF6rO8IOyngeygkSDsu6TrrqTri4jsvIDsnbTshZjtlZjrqbAg7JqU6rWs7IKs7ZWtIOygleumrCDrsI8g6riw64qlIOuwmOyYgScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rCc67Cc67aA7YSwIO2FjOyKpO2KuCwg7Jq07JiBIOuwmOyYgeq5jOyngCDri6jrj4Ug7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqs7XthrUg7KeI66y4IOydkeuLteyXkCDrlLDrpbgg7LaU6rCAIOyniOusuCDsoJzslrQg67CPIOycoO2aqOyEsSDqsoDspp0g66Gc7KeBIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qzte2GtSDsp4jrrLgg7J2R64u17JeQIOuUsOudvCDstpTqsIAg7KeI66y47J2EIOuPmeyggeycvOuhnCDsoJzslrQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+ycoO2aqOyEsSDqsoDspp3snYQg7Ya17ZW0IOyVjOunnuydgCDri7Xrs4Drp4wg7J6F66Cl65CY64+E66GdIOyymOumrCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yekOuPmeyeheugpSDrj4TsnoXsnLzroZwg7ZiE7JeFIOqxtOuLuSDsnoXroKUg7Iuc6rCEIDUwJSDsnbTsg4Eg64uo7LaVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfquLDsobQg7J6Y66q765CcIOyeheugpeycvOuhnCDsnbjtlZwg7Ius7IKsIOuwmOugpCDsvIDsnbTsiqTrpbwg7Jyg7Zqo7ISxIOqygOymnSDroZzsp4HsnLzroZwg7LCo64uoJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdEQuyDneuqhSDsp4jrs5Hsi6zsgqwg6riw64qlIOqwnOyEoCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjUtMDknLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNS0xMicsXHJcbiAgICAgIHdoZXJlOiAnRELsg53rqoUnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7KeI67OR7Ius7IKsIOq4sOuKpSDrjIDsnZEg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IDIsNDAw66eMIOqxtCDthYzsnbTruJTsl5Ag7Iug6recIOyDge2SiCDrjbDsnbTthLAgNCw1MDDrp4wg6rG0IOy2lOqwgCDtlYTsmpQg4oCUIOuLqOydvCDthYzsnbTruJQg6rWs7KGw7J2YIO2VnOqzhOulvCDtjJDri6jtlZjsl6wgTElTVCDtjIzti7DshZgg7J6s7ISk6rOEIOygnOyViCDrsI8g7KCB7JqpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsg4Htkogg7L2U65OcIOq4sOuwmCBMSVNUIO2MjO2LsOyFmOycvOuhnCDrtoTrpqztlZjsl6wsIOq4sOyhtCDshozsiqQg67CPIOy/vOumrCDsiJjsoJXsnYQg7LWc7IaM7ZmU7ZWY66m07IScIOq1rOyhsCDsoITtmZgnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uNsOydtO2EsCDsoIHsnqwg7KCEIOykkeuztcK37KCV7ZWp7ISxIOqygOymnSDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICc2LDkwMOunjCDqsbQg6rec66qoIO2FjOydtOu4lOydhCDsg4Htkogg64uo7JyE66GcIOu2hOumrO2VmOyXrCDsnKDsp4Drs7TsiJjshLEg7ZmV67O0JyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6Dqt5wg7IOB7ZKIIOy2lOqwgCDsi5wg7YyM7Yuw7IWYIOy2lOqwgOunjOycvOuhnCDrjIDsnZEg6rCA64ql7ZWcIO2ZleyepSDqtazsobAg7ZmV67O0JyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfquLDsobQg7L+866asIOuzgOqyvSDsl4bsnbQg6rWs7KGwIOyghO2ZmCDsmYTro4wnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0tCIExpZmUg7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzshKAnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI1LTA3JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMDgnLFxyXG4gICAgICB3aGVyZTogJ0tCIExpZmUnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6Dqt5wg6rG06rCVIOyDge2SiCDstpzsi5zsl5Ag65Sw6528IDXrhYQvMTDrhYQg7Iuc64KY66as7JikIO2MkOydhCDrtoTrpqztlZjsl6wg7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLoOygleybkCDrjbDsnbTthLAg67CPIOq4sOyhtCDsi6zsgqwg7IaM7IqkIOu2hOyEneu2gO2EsCDsi5zsnpHtlZjsl6wsIOq4sOyhtCDqtazsobDrpbwg7J6s7Zmc7Jqp7ZWcIOyEpOqzhOuhnCDqsJzrsJwg6riw6rCEIOuLqOy2lScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZiE7JeFIOy7pOuupOuLiOy8gOydtOyFmCDsp4Dsm5DsnYQg67Cb7Jy866mwLCDqsJzrsJzrtoDthLAg7Jq07JiBIOuwmOyYgeq5jOyngCDsiJjtloknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsgqzsoIQg64+E66mU7J24IOyngOyLnSDsl4bsnbQg7Yis7J6F65CY7Ja0LCDshozsiqQg67aE7ISd67aA7YSwIOyatOyYgSDrsJjsmIHquYzsp4AgMuyjvCDrgrQg7JmE66OMIOKAlCDsg4Htkogg7Lac7IucIOydvOyglSDrgqnquLAg7KSA7IiYJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICftlZjrgpjsg53rqoUg7KCcM+uztO2XmCDsi5zsiqTthZwg6rWs7LaVICjssq3slb3si6zsgqwg7J6Q64+Z7ZmUKScsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjQtMDgnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNS0wNicsXHJcbiAgICAgIHdoZXJlOiAn7ZWY64KY7IOd66qFJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+y9mO2FkOy4oCDrsLDtj6wg6riw64qlJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rCc67Cc6rOEIOKGkiDthYzsiqTtirjqs4Qg4oaSIOyatOyYgeqzhCDsvZjthZDsuKAg67Cw7Y+sIOq4sOuKpSDshKTqs4Qg67CPIOqwnOuwnCAo7JW9IDI1MOunjCDqsbQg6rec66qoKScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ISg7YOd7KCBIOuwsO2PrCwg6rKw7J6sLCDsmIjslb0g67Cw7Y+sIOq4sOuKpSDqtaztmIQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uLqOqxtCBTRUxFQ1Qg4oaSIDEsMDAw6rG0IOuwsOy5mCDsspjrpqwg7KCE7ZmY7Jy866GcIOuMgOyaqeufiSDrsLDtj6wg7ISx64qlIOuMgO2PrSDri6jstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yGlOujqOyFmCDsoITssrQg7L2Y7YWQ7Lig6rCAIO2VnCDtmZTrqbTsl5Ag66Gc65Sp65CY64qUIOq1rOyhsOuhnCDsnbjtlbQg7LSI6riwIOuhnOuUqeydtCDripDrprAg66y47KCc66W8IOu5hOuPmeq4sCDsspjrpqzroZwg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqsozsi5ztjJAgLyDthrXqs4Qg7ZmU66m0JyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7JqU6rWs7IKs7ZWt7JeQIOunnuy2sCDquLDsobQg6rKM7Iuc7YyQIO2ZlOuptCDsu6TsiqTthLDrp4jsnbTsp5UnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLrOyCrCDqsrDqs7zrpbwg6rCBIO2KueyEseyXkCDrp57qsowg7LSdIDbqsJwg7ZmU66m07Jy866GcIOq1rOyEse2VmOyXrCDsoJzqs7UnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICcyNTDrp4wg6rG0IOq3nOuqqCDrsLDtj6zrpbwg64uo6rG0IOKGkiDrsLDsuZgg7LKY66as66GcIOyghO2ZmO2VmOyXrCDsspjrpqwg7Iuc6rCEIOuMgO2PrSDri6jstpUsIERCIOu2gO2VmCDqsJDshownIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0RCQSDsnZjsobQg7JeG7J20IOqwnOuwnO2MgCDsnpDssrQg7Jq07JiBIOuwsO2PrCDqsIDriqXtlZwg7LK06rOEIOq1rOy2lScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnVGhlIEtFIO2UhOuhnO2MjOydvCDrsI8g7J6l67mEIOq0gOumrCDsi5zsiqTthZwnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI0LTAzJyxcclxuICAgICAgZW5kZWRBdDogJzIwMjQtMDcnLFxyXG4gICAgICB3aGVyZTogJ+y9lOumrOyVhOyXkeyKpO2NvO2KuCjso7wpJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yCrOuCtCDsnbjroKXCt+yepeu5hCDqtIDrpqwg7Iuc7Iqk7YWcIOq1rOy2lScsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+ydtOugpeyEnCDsiJjsoJUg7Iq57J24LCDqtIDrpqzsnpAg66mU64m0LCDsgqzsmqnsnpAg6raM7ZWcIOq0gOumrCwg66Gc6re4IOq0gOumrChBT1AsIExvZ2JhY2spIOqwnOuwnCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iuk7Iuc6rCEIOyEnOuyhCDsnpDsm5Ag66qo64uI7YSw66eBIOq4sOuKpSDqtaztmIQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0RvY2tlciBDb21wb3NlICsgSmVua2lucyDquLDrsJgg67mM65OcwrfrsLDtj6wg7ZmY6rK97J2EIOyjvOuPhO2VmOyXrCDqtazstpUnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9